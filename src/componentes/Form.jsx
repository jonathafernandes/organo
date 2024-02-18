import { useState } from "react";

import PropTypes from "prop-types";
import FormButton from "./FormButton";
import DropdownList from "./DropdownList";
import TextField from "./TextField";

const Form = ({ onRegister, teams, registerTeam }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", name, position, image, team);
    onRegister({
      name,
      position,
      image,
      team
    });
  };

  return (
    <section className="flex items-start justify-evenly">
      <form onSubmit={onSubmit}>
        <h2 className="bg-zinc-700 p-2 rounded">Preencha os dados para criar um card de colaborador</h2>
        <div className="bg-zinc-700 border-solid border-2 border-zinc-500 rounded p-4 mt-5">
          <TextField
            required={true}
            label="Nome"
            placeholder="Digite o nome do colaborador"
            value={name}
            onChange={(value) => setName(value)}
          />
          <TextField
            required={true}
            label="Cargo"
            placeholder="Digite o cargo do colaborador"
            value={position}
            onChange={(value) => setPosition(value)}
          />
          <TextField
            label="Imagem"
            placeholder="Digite a URL da imagem"
            onChange={(value) => setImage(value)}
          />
          <DropdownList
            required={true}
            label="Time"
            items={teams}
            value={team}
            onChange={(value) => setTeam(value)}
            />
          <FormButton text="Criar card" />
        </div>
      </form>
      <span className="bg-zinc-700 p-2 rounded">ou</span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          registerTeam({ name: teamName, color: teamColor });
        }}
      >
        <h2 className="bg-zinc-700 p-2 rounded">preencha os dados para criar um novo time.</h2>
        <div className="bg-zinc-700 border-solid border-2 border-zinc-500 rounded p-4 mt-5">
          <TextField
            required
            label="Nome"
            placeholder="Digite o nome do time"
            value={teamName}
            onChange={(value) => setTeamName(value)}
          />
          <TextField
            required
            label="Cor do time"
            placeholder="Escollha uma cor"
            value={teamColor}
            onChange={(value) => setTeamColor(value)}
            type="color"
          />
          <FormButton text="Criar novo time" />
        </div>
      </form>
    </section>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  registerTeam: PropTypes.func.isRequired,
};

export default Form;

