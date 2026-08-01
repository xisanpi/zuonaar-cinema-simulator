import { notFound } from "next/navigation";
import { CinemaExperience } from "../../CinemaExperience";
import { auditoriums, getAuditoriumById } from "../../cinema-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return auditoriums.map((auditorium) => ({
    auditoriumId: auditorium.id,
  }));
}

export default async function CinemaPage({
  params,
}: {
  params: Promise<{ auditoriumId: string }>;
}) {
  const { auditoriumId } = await params;
  const auditorium = getAuditoriumById(auditoriumId);

  if (!auditorium) notFound();

  return <CinemaExperience initialAuditoriumId={auditorium.id} />;
}
