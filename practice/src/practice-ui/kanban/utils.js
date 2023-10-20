export function getdayColor(boardId) {
  switch (true) {
    case ["MON", "mon", "월요일", "월"].includes(boardId):
      return "#E61A73";
    case ["TUE", "tue", "화요일", "화"].includes(boardId):
      return "#EDAE13";
    case ["WED", "wed", "수요일", "수"].includes(boardId):
      return "#0BBAB3";
    case ["THU", "thu", "목요일", "목"].includes(boardId):
      return "#0764A1";
    case ["FRI", "fri", "금요일", "금"].includes(boardId):
      return "#25A2DA";
    case ["SAT", "sat", "토요일", "토"].includes(boardId):
      return "#8146C4";
    case ["SUN", "sun", "일요일", "일"].includes(boardId):
      return "#E97EC2";
    default:
      return "#B1A79B";
  }
}
