import { RiInformationFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer id="footer" className="mb-10 flex flex-col items-center gap-8">
            <RiInformationFill className="text-blue-500" size={30} />
            <p className="text-center text-lg mx-4 sm:mx-auto sm:w-1/2">
                Crie colaboradores, escolha entre os times padrões ou crie o seu próprio time, defina a cor de cada time.
            </p>
            <p className="text-center text-zinc-400">&copy; 2024 Organo.</p>
        </footer>
    );
};

export default Footer;