type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "center" | "bottom";

type ToastType = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastType) => {
  return <span> Toast position - {position} </span>;
};
