import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "kanban",
});

export const todoAtom = atom({
  key: "todo",
  default: {
    MON: [
      { id: 1698563541615, text: "월요일엔" },
      { id: 1698563541616, text: "바쁘지 않을까" },
    ],
    TUE: [
      { id: 1698563541617, text: "화요일은" },
      { id: 1698563541618, text: "성급해 보이지" },
    ],
    WED: [
      { id: 1698563541619, text: "수요일은" },
      { id: 1698563559583, text: "어정쩡한 느낌" },
    ],
    THU: [
      { id: 1698563559584, text: "목요일은" },
      { id: 1698563559585, text: "그냥 왠지 싫어" },
    ],
    FRI: [
      { id: 1698563559586, text: "금요일" },
      { id: 1698563559587, text: "금요일에 만나요" },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
