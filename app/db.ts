import { Challenge } from "./models";
import { turso } from "@/lib/turso";

export async function listChallenges(): Promise<Challenge[]> {
  const response = await turso.execute("SELECT * FROM challenges");
  return response.rows as unknown as Challenge[];
}
export async function getChallenge(id: number): Promise<Challenge | null> {
  const response = await turso.execute(
    "SELECT * FROM challenges WHERE id = ?",
    [id]
  );
  return response.rows[0] as unknown as Challenge;
}
