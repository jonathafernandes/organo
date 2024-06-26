import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Button from "./Button";
import DropdownList from "./DropdownList";
import TextField from "./TextField";
import Employee from "./Employee";

const Form = ({ teams, registerTeam }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("#2563eb");

  const [teamList, setTeamList] = useState(false)

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
      setTeamList(true);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      name,
      role,
      image,
      team,
      teamColor
    };
    setCards([...cards, newCard]);
    setName("");
    setRole("");
    setImage("");
    setTeam("");
    setTeamList(true);
    
    const storedCards = localStorage.getItem("cards");
    const updatedCards = storedCards ? JSON.parse(storedCards) : [];
    updatedCards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  
    alert("Criado com sucesso! ✅⏬");
  };

  const handleRegisterTeam = (event) => {
    event.preventDefault();
    registerTeam({ name: teamName, color: teamColor });
    setTeamName("");

    alert("Time criado com sucesso! ✅");
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    
    alert("Card excluído com sucesso! ✅");
  };

  return (
    <>
      <div className="flex-col items-center mx-4 flex sm:items-start sm:flex-row justify-evenly my-24 gap-4">
        <form onSubmit={onSubmit}>
          <h2 className="bg-zinc-700 border-solid border-2 border-blue-500 p-2 rounded">Preencha os dados para criar um card de colaborador</h2>
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
              value={role}
              onChange={(value) => setRole(value)}
            />
            <TextField
              label="Imagem"
              placeholder="Digite a URL da imagem"
              value={image}
              onChange={(value) => setImage(value)}
            />
            <DropdownList
              required={true}
              label="Time"
              items={teams}
              value={team}
              onChange={(value) => setTeam(value)}
            />
            <Button text="Criar card" />
          </div>
        </form>
        <span className="bg-zinc-700 p-2 rounded">ou</span>
        <form
          onSubmit={handleRegisterTeam}
        >
          <h2 className="bg-zinc-700 border-solid border-2 border-blue-500 p-2 rounded">preencha os dados para criar um novo time.</h2>
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
              placeholder="Escolha uma cor"
              value={teamColor}
              onChange={(value) => setTeamColor(value)}
              type="color"
            />
            <Button text="Criar novo time" />
          </div>
        </form>
      </div>
      {teamList ? (
        <>
          <h2 className="text-xl text-center w-1/2 my-0 mx-auto bg-zinc-700 border-solid border-2 border-blue-500 p-2 rounded">Minha organização</h2>
          <div className="flex justify-center gap-6 flex-wrap mt-8 mb-20">
            {cards.map((card, index) => (
              <Employee
                key={index}
                name={card.name}
                role={card.role}
                image={card.image}
                team={card.team}
                onDelete={() => handleDeleteCard(index)}
                teamColor={card.teamColor}
                />
              ))}
          </div>
        </>
      ) : (
        <h2 className="text-xl text-center mx-auto p-2 rounded sm:my-20">Nenhum card criado ainda...</h2>
      )}
    </>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func,
  teams: PropTypes.array,
  registerTeam: PropTypes.func,
};

export default Form;