import { TOTAL_VOTER_NUMBER } from "../constants";

export function formatDate(date) {
  return Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}

export function calculateVotingRate(numOfAllVoters) {
  return Intl.NumberFormat("ko-KR", { style: "percent" }).format(
    numOfAllVoters / TOTAL_VOTER_NUMBER
  );
}
