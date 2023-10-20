import { LOCALSTORAGE_KEY, TOTAL_VOTER_NUMBER } from "../constants";

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
}

export function setLocalStorage(voteList) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(voteList));
}

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

export function addOrSubtractDate(number) {
  const now = new Date();
  return new Date(now).setDate(now.getDate() + number);
}
