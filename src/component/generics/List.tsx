import { ReactNode } from "react";

type ListPropType<T extends ReactNode> = {
  list: T[];
  onClick: (value: T) => void;
};

export const List = <T extends ReactNode>({
  list,
  onClick,
}: ListPropType<T>) => {
  return (
    <div>
      <h2> List of items. </h2>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
