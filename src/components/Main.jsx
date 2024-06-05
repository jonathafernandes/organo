import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./Form";

const Main = () => {
    const [team, setTeam] = useState([
        {
            id: uuidv4(),
            name: "Time A",
        },
        {
            id: uuidv4(),
            name: "Time B",
        },
        {
            id: uuidv4(),
            name: "Time C",
        },
        {
            id: uuidv4(),
            name: "Time D",
        },
        {
            id: uuidv4(),
            name: "Time E",
        },
        {
            id: uuidv4(),
            name: "Time F",
        },
        {
            id: uuidv4(),
            name: "Time G",
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

export default Main;