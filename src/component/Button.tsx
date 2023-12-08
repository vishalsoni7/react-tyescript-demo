import React from "react";

type BtnPropType = {
  clickBtn: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (prop: BtnPropType) => {
  return (
    <div>
      <h2> Button </h2>
      <button onClick={(event) => prop.clickBtn(event, 1)}> Click Me </button>
    </div>
  );
};

export default Button;
