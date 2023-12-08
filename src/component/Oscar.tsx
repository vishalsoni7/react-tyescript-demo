type OscarPropType = {
  children: React.ReactNode;
};

const Oscar = (props: OscarPropType) => {
  return <div> {props.children} </div>;
};

export default Oscar;
