import { runCommitteesScrapper } from "./scrapper/scrapper.js";

export async function getPolititianCommittees(polititianName) {
  const committees = runCommitteesScrapper(polititianName);

  if (Object.keys(committees).length === 0) {
    return null;
  }

  return committees;
}
