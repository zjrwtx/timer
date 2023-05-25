import React, { useState, useRef } from "react";
import Timer from "./Timer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Control = ({ focusTime, restTime }) => {
  const [isResting, setIsResting] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timerRef.current);
          handleTimerEnd(isResting);
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(timerRef.current);
  };

  const handleSkip = () => {
    clearInterval(timerRef.current);
    handleTimerEnd(isResting);
  };

  const handleTimerEnd = (isResting) => {
    setIsResting(!isResting);
    setCompleted(completed + 1);
    setTimeLeft(!isResting ? restTime * 60 : focusTime * 60);

    if (completed % 4 === 0 && isResting) {
      toast.info("You have completed 4 pomodoros. Take a longer break!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (isResting) {
      toast.success("Rest time is over. Get back to work!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.success("Focus time is over. Take a break!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div>
      <h1>{isResting ? "Resting" : "Focusing"}</h1>
      <Timer timeLeft={timeLeft} onTimerEnd={handleTimerEnd} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleSkip}>Skip</button>
      {/* 添加 <ToastContainer> 组件 */}
      <ToastContainer
        position="top-center" // 设置通知消息的位置
        autoClose={5000} // 5秒自动关闭通知
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default Control;
