import { notFound } from "next/navigation";
import { CinemaExperience } from "../../CinemaExperience";
import { getAuditoriumById } from "../../cinema-data";

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
