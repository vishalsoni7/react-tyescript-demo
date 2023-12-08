export type ProfilePropType = {
  name: string;
};

export const Profile = ({ name }: ProfilePropType) => {
  return (
    <div>
      <h2> Private profile component, name is {name} </h2>
    </div>
  );
};
