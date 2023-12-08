type RandomNumberType = {
  value: number;
};

type IsPositiveType = RandomNumberType & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};

type IsNegativeType = RandomNumberType & {
  isNegative?: boolean;
  isPositive?: never;
  isZero?: never;
};

type IsZeroType = RandomNumberType & {
  isZero?: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberPropType = IsNegativeType | IsPositiveType | IsZeroType;

export const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberPropType) => {
  return (
    <div>
      <h2>
        {" "}
        {value} {isNegative && "is Negative."} {isPositive && "is Positive."}
        {isZero && "is Zero."}
      </h2>
    </div>
  );
};
