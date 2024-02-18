import PropTypes from "prop-types";

import Employee from "./Employee";

// import hexToRgba from "hex-to-rgba";

const Team = ({ team, employee, onDelete, changeColor, onFavorite }) => {
  return (
      employee && employee.length > 0 && (
      <section
        className="team"
        // style={{
          // backgroundColor: hexToRgba(team.color, "0.6")
        // }}
      >
        <input
          type="color"
          className=""
          value={team.color}
          onChange={(event) => {
            changeColor(event.target.value, team.id);
          }}
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="">
          {employee.map((employee, index) => (
            <Employee
              key={index}
              colaborador={employee}
              bgColor={team.color}
              onDelete={onDelete}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      </section>
    )
  );
};

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  employee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.string,
      team: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ),
  onDelete: PropTypes.func,
  changeColor: PropTypes.func,
  onFavorite: PropTypes.func,
};

export default Team;
