type PrsonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PrsonListProps) => {
  return (
    <div>
      {props.names.map((n) => (
        <h2 key={n.first}>
          {" "}
          {n.first} {n.last}{" "}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
