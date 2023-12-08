import { useEffect, useRef, useState } from "react";

export const MutalbeRefs = () => {
  const [timer, setTimer] = useState<number>(0);
  const mutableRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(mutableRef.current);
  };

  useEffect(() => {
    mutableRef.current = window.setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h2> Hook Timer : {timer} </h2>
      <button onClick={() => stopTimer()}> Stop </button>
    </div>
  );
};
