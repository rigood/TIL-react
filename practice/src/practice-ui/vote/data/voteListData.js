import { addOrSubtractDate } from "../utils/utils";

const voteList = [
  {
    id: 1,
    title: "아파트 명칭 변경 투표",
    desc: "당 아파트 이름을 변경하고자 합니다. 아래 이름 중 1개를 선택해주세요.",
    options: [
      "두산위브 포세이돈 아파트",
      "에코메트로 2차 더시티 포레스트",
      "디에트르 로얄 더펠리체 아파트",
      "영어도시 3차 에듀포레 아인슈타인타운",
    ],
    startDate: addOrSubtractDate(-5),
    endDate: addOrSubtractDate(+5),
    votedUserIds: [],
  },
  {
    id: 2,
    title: "경비실 에어컨 설치",
    desc: "경비원들의 여름철 업무환경 개선을 위하여 당 아파트 경비실 5개소에 에어컨을 설치하고자 합니다.\n(설치 비용은 관리비 예비비에서 충당)",
    options: ["찬성", "반대"],
    startDate: addOrSubtractDate(-7),
    endDate: addOrSubtractDate(+4),
    votedUserIds: ["2"],
  },
  {
    id: 3,
    title: "입주민 헬스장 신규 운동기구 선호도 조사",
    desc: "입주민 헬스장에 새로운 운동기구를 도입하고자 합니다. 원하는 운동기구 1종을 선택해주세요.",
    options: [
      "로우 풀리 (Low Pully)",
      "시티드 레그 프레스 (Seated Leg Press)",
      "친업 딥 어시스트 (Chin-Up, Dip Assist)",
      "펙 덱 플라이 (Pec Deck Fly)",
    ],
    startDate: addOrSubtractDate(-10),
    endDate: addOrSubtractDate(+3),
    votedUserIds: ["2", "3"],
  },
  {
    id: 4,
    title: "102동 동대표 선출안",
    desc: "입주자 대표회의 구성을 위하여 102동 동대표를 선출하고자 합니다. 아래 후보자 중 1명을 선택해주세요.",
    options: ["정약용", "이순신", "김구"],
    startDate: addOrSubtractDate(-30),
    endDate: addOrSubtractDate(-10),
    votedUserIds: ["2", "3", "4"],
  },
  {
    id: 5,
    title: "배드민턴장 용도변경 찬반 투표",
    desc: "주민 이용률이 저조한 배드민턴장을 다른 용도로 변경하고자 합니다.",
    options: ["찬성", "반대"],
    startDate: addOrSubtractDate(-50),
    endDate: addOrSubtractDate(-35),
    votedUserIds: ["1", "2"],
  },
];

export default voteList;
