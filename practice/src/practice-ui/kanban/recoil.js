import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "kanban",
});

export const todoAtom = atom({
  key: "todo",
  default: {
    MON: [
      { id: 11, text: "월요일엔" },
      { id: 22, text: "바쁘지 않을까" },
    ],
    TUE: [
      { id: 11, text: "화요일은" },
      { id: 22, text: "성급해 보이지" },
    ],
    WED: [
      { id: 11, text: "수요일은" },
      { id: 22, text: "어정쩡한 느낌" },
    ],
    THU: [
      { id: 11, text: "목요일은" },
      { id: 22, text: "그냥 왠지 싫어" },
    ],
    FRI: [
      { id: 11, text: "금요일" },
      { id: 22, text: "금요일에 만나요" },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
