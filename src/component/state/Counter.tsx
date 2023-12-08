import { useReducer } from "react";

type StateType = { count: number };

type UpdateActionType = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetActionType = {
  type: "reset";
};

type ActionType = UpdateActionType | ResetActionType;

const initialState = { count: 0 };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 10 });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 10 });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h2> My Count: {state.count}</h2>
      <button onClick={handleIncrement}>Add 10</button>
      <button onClick={handleDecrement}>Subtract 10</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

// Type inharitance // Strick mode for actions
