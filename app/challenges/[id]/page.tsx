import { getChallenge } from "@/app/db";

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const challenge = await getChallenge(id);

  if (!challenge) {
    return null;
  }

  return (
    <div>
      <h1>{challenge.name}</h1>
      <p>{challenge.description}</p>
    </div>
  );
}
