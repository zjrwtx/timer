import React, { useEffect } from "react";

const Timer = ({ timeLeft, isResting, onTimerEnd }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd(isResting);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div>
      <h1>{`${minutes}:${seconds}`}</h1>
    </div>
  );
};

export default Timer;
