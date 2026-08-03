import inventoryJson from "./cinema-inventory.json";

export type PremiumFormat = "IMAX" | "Dolby Cinema" | "Other PLF";

export type InventoryHall = {
  id: string;
  name: string;
  brand: PremiumFormat;
  projection: string;
  city: string;
  address: string;
  width: number | null;
  height: number | null;
  area: number | null;
  ratio: string;
  seats: number | null;
  status: string;
  latitude: number | null;
  longitude: number | null;
  sourceUrl: string;
  dataSourceId?: string;
  dataSourceSheet?: string;
  dataSourceRow?: number;
  isPriority: boolean;
  priorityRank: number | null;
  priorityScore: number | null;
};

export type CinemaListing = {
  id: string;
  name: string;
  sourceName: string;
  city: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  halls: InventoryHall[];
  formats: PremiumFormat[];
  largestScreenArea: number | null;
  featuredHall: InventoryHall;
  priorityRank: number | null;
};

export type CitySummary = {
  name: string;
  cinemaCount: number;
  hallCount: number;
  center: {
    latitude: number;
    longitude: number;
  };
  bounds: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
};

export const inventoryHalls = inventoryJson as InventoryHall[];

function cleanCinemaName(name: string, city: string) {
  return name.startsWith(city) ? name.slice(city.length) : name;
}

function screenArea(hall: InventoryHall) {
  return hall.area ?? (hall.width && hall.height ? hall.width * hall.height : 0);
}

function buildListings() {
  const groups = new Map<string, InventoryHall[]>();

  for (const hall of inventoryHalls) {
    const key = `${hall.city}::${hall.name}::${hall.address}`;
    const current = groups.get(key) ?? [];
    current.push(hall);
    groups.set(key, current);
  }

  return Array.from(groups.values()).map<CinemaListing>((halls) => {
    const sortedHalls = [...halls].sort((left, right) => {
      if (left.isPriority !== right.isPriority) {
        return left.isPriority ? -1 : 1;
      }
      if (left.priorityRank !== right.priorityRank) {
        return (
          (left.priorityRank ?? Number.POSITIVE_INFINITY) -
          (right.priorityRank ?? Number.POSITIVE_INFINITY)
        );
      }
      return screenArea(right) - screenArea(left);
    });
    const featuredHall = sortedHalls[0];
    const locationHall =
      halls.find(
        (hall) => hall.latitude !== null && hall.longitude !== null,
      ) ?? featuredHall;

    return {
      id: `cinema-${featuredHall.id}`,
      name: cleanCinemaName(featuredHall.name, featuredHall.city),
      sourceName: featuredHall.name,
      city: featuredHall.city,
      address: featuredHall.address,
      latitude: locationHall.latitude,
      longitude: locationHall.longitude,
      halls: sortedHalls,
      formats: Array.from(
        new Set(sortedHalls.map((hall) => hall.brand)),
      ) as PremiumFormat[],
      largestScreenArea:
        Math.max(...sortedHalls.map((hall) => screenArea(hall))) || null,
      featuredHall,
      priorityRank:
        sortedHalls.find((hall) => hall.priorityRank !== null)?.priorityRank ??
        null,
    };
  });
}

export const cinemaListings = buildListings();

function buildCitySummaries() {
  const cities = new Map<string, CinemaListing[]>();

  for (const cinema of cinemaListings) {
    const current = cities.get(cinema.city) ?? [];
    current.push(cinema);
    cities.set(cinema.city, current);
  }

  return Array.from(cities.entries())
    .map<CitySummary>(([name, cinemas]) => {
      const locations = cinemas.filter(
        (
          cinema,
        ): cinema is CinemaListing & {
          latitude: number;
          longitude: number;
        } => cinema.latitude !== null && cinema.longitude !== null,
      );
      const latitudes = locations.map((cinema) => cinema.latitude);
      const longitudes = locations.map((cinema) => cinema.longitude);
      const center = {
        latitude:
          latitudes.reduce((sum, value) => sum + value, 0) /
            Math.max(latitudes.length, 1) || 0,
        longitude:
          longitudes.reduce((sum, value) => sum + value, 0) /
            Math.max(longitudes.length, 1) || 0,
      };
      const latitudePadding = Math.max(
        (Math.max(...latitudes, center.latitude) -
          Math.min(...latitudes, center.latitude)) *
          0.12,
        0.025,
      );
      const longitudePadding = Math.max(
        (Math.max(...longitudes, center.longitude) -
          Math.min(...longitudes, center.longitude)) *
          0.12,
        0.025,
      );

      return {
        name,
        cinemaCount: cinemas.length,
        hallCount: cinemas.reduce(
          (sum, cinema) => sum + cinema.halls.length,
          0,
        ),
        center,
        bounds: {
          north: Math.max(...latitudes, center.latitude) + latitudePadding,
          south: Math.min(...latitudes, center.latitude) - latitudePadding,
          east: Math.max(...longitudes, center.longitude) + longitudePadding,
          west: Math.min(...longitudes, center.longitude) - longitudePadding,
        },
      };
    })
    .sort(
      (left, right) =>
        right.cinemaCount - left.cinemaCount ||
        left.name.localeCompare(right.name, "zh-CN"),
    );
}

export const citySummaries = buildCitySummaries();

export function getCinemaListingByHallId(hallId: string) {
  return cinemaListings.find((cinema) =>
    cinema.halls.some((hall) => hall.id === hallId),
  );
}

export function haversineDistanceKm(
  from: { latitude: number; longitude: number },
  to: { latitude: number; longitude: number },
) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const deltaLatitude = toRadians(to.latitude - from.latitude);
  const deltaLongitude = toRadians(to.longitude - from.longitude);
  const originLatitude = toRadians(from.latitude);
  const targetLatitude = toRadians(to.latitude);
  const value =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(targetLatitude) *
      Math.sin(deltaLongitude / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(value));
}
