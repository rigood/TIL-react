import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";
import styled from "styled-components";

function SignPad({ setDidSign }, ref) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    contextRef.current = ctx;
  }, []);

  const startDrawing = (e) => {
    isDrawingRef.current = true;

    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    drawing(e);
    setDidSign(true);
  };

  const finishDrawing = () => {
    isDrawingRef.current = false;
    contextRef.current.beginPath();
  };

  const drawing = (e) => {
    if (!isDrawingRef.current) return;

    const { offsetX, offsetY } = e.nativeEvent;

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
  };

  const resetDrawing = () => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setDidSign(false);
  };

  useImperativeHandle(ref, () => {
    return {
      resetDrawing,
    };
  });

  // useImperativeHandle 참고
  // https://timmousk.com/blog/react-call-function-in-child-component/
  // https://youtu.be/zpEyAOkytkU

  return (
    <Wrapper
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
      onMouseMove={drawing}
    />
  );
}

export default forwardRef(SignPad);

const Wrapper = styled.canvas`
  width: 100%;
  height: 200px;
  background-color: var(--secondary);
  border-radius: 10px;
`;
