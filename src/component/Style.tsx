type StypePropType = {
  styles: React.CSSProperties;
};

const Style = (props: StypePropType) => {
  return (
    <div style={props.styles}>
      <h2> Check Style </h2>{" "}
    </div>
  );
};

export default Style;
