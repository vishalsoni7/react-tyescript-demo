type StatusProp = {
  status: "error" | "success" | "loading";
};

const Status = (props: StatusProp) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully.";
  } else if (props.status === "error") {
    message = "Error while fetching data!";
  }
  return (
    <div>
      {" "}
      <h2> Message {message} </h2>
    </div>
  );
};

export default Status;
