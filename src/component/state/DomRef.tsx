import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current!.style.color = "red";
    inputRef.current!.style.padding = "1rem";
    inputRef.current!.style.border = "2px solid red";

    inputRef.current!.style.position = "absolute";
    inputRef.current!.style.top = "50%";
    inputRef.current!.style.left = "50%";
    inputRef.current!.style.transform = "translate(-50%, -50%)";
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
