import PropTypes from "prop-types";
import notFoundImage from "../assets/not-found-img.svg";

import { PiTrashSimple } from "react-icons/pi";

const Employee = ({ name, role, image, team, onDelete, teamColor }) => {
  return (
    <div className={`bg-zinc-700 border-solid border-2 rounded px-4 my-5`}
    style={{borderColor: teamColor}}
    >
      <div className="flex items-center flex-col justify-center text-center gap-4 size-56">
        <img
          className="size-20 rounded-full"
          src={image || notFoundImage}
          alt={name}
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-zinc-400">{role}</p>
          <p className="font-semibold text-blue-500">{team}</p>
        </div>
        <button onClick={onDelete} className="hover:text-red-600"><PiTrashSimple /></button>
    </div>
  </div>
  );
};

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string,
  team: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  teamColor: PropTypes.string.isRequired
};

export default Employee;
