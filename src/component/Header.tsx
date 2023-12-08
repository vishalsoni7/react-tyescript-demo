type HeaderPropType = {
  children: string;
};

const Header = (props: HeaderPropType) => {
  return (
    <div>
      {" "}
      <h2> {props.children} </h2>{" "}
    </div>
  );
};

export default Header;
