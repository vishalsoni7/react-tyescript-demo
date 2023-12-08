import React from "react";

type InputPropType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputPropType) {
  return (
    <div>
      <h2> Input </h2>
      <input type="text" onChange={props.onChange} value={props.value} />
    </div>
  );
}

export default Input;
