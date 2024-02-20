import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./Form";

const Teams = () => {
    const [team, setTeam] = useState([
        {
            id: uuidv4(),
            favorite: false,
            name: "Programação",
            color: "#57C278",
        },
        {
            name: "Front-End",
            color: "#82CFFA",
        },
        {
            id: uuidv4(),
            favorite: false,
            name: "Data Science",
            color: "#A6D157",
        },
        {
            id: uuidv4(),
            favorite: false,
            name: "Devops",
            color: "#E06B69",
        },
        {
            id: uuidv4(),
            favorite: false,
            name: "UX e Design",
            color: "#DB6EBF",
        },
        {
            id: uuidv4(),
            favorite: false,
            name: "Mobile",
            color: "#FFBA05",
        },
        {
            id: uuidv4(),
            favorite: false,
            name: "Inovação e Gestão",
            color: "#FF8A29",
        },
    ]);

    function handleNewTeam(newTeam) {
        setTeam([...team, { ...newTeam, id: uuidv4() }]);
    }

    return (
        <div>
            <Form
                registerTeam={handleNewTeam}
                teams={team.map((team) => team.name)}
            />
        </div>
    );
};

export default Teams;