import ChallengeCard from "@/components/ChallengeCard";
import { listChallenges } from "./db";
import Link from "next/link";

export default async function Home() {
  const challenges = await listChallenges();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 md:max-w-lg md:px-0 lg:max-w-xl">
        <main className="flex flex-1 flex-col justify-center">
          <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-9 lg:mt-10">
            {challenges.map((challenge) => (
              <Link href={`/challenges/${challenge.id}`} key={challenge.id}>
                <ChallengeCard
                  key={challenge.id}
                  title={challenge.name}
                  description={challenge.description}
                />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
