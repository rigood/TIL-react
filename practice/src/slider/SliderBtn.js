import "./style.css";

function SliderBtn({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "prev" ? "btn prev-btn" : "btn next-btn"}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
}

export default SliderBtn;
