type GreetProps = {
  name: string;
  sessionNumber?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { sessionNumber = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}, we are revising TypeScript session ${sessionNumber}.`
          : "Welcome guest."}
      </h2>
    </div>
  );
};

export default Greet;
