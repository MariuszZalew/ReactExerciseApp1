import PersonContainer from "../PersonContainer";
import Boss from "../Boss/Boss";

const Everyone = ({ persons, boss }) => {
  return (
    <div>
      <Boss />
      <PersonContainer />
    </div>
  );
};

export default Everyone;
