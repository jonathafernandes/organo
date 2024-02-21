import PropTypes from "prop-types";

const Employee = ({ name, role, image, team }) => {
  return (
    <div className="bg-zinc-700 border-solid border-2 border-zinc-500 rounded px-4 my-5">
      <div className="flex items-center flex-col justify-center text-center gap-4 size-52">
        <img
          className="size-20 rounded-full"
          src={image || "https://placekitten.com/300/300"}
          alt={name}
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-zinc-400">{role}</p>
          <p className="font-semibold text-blue-500">{team}</p>
        </div>
    </div>
  </div>
  );
};

Employee.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
  team: PropTypes.string
};

export default Employee;
