import { RiInformationFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer id="footer" className="mb-10 flex flex-col items-center gap-8">
            <RiInformationFill className="text-blue-500" size={30} />
            <p className="text-center mx-4 sm:mx-auto sm:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut facere officiis obcaecati est ipsum quibusdam eligendi reprehenderit impedit necessitatibus iusto eius odio repellat quidem totam culpa, ad ullam unde.</p>
            <p className="text-center text-zinc-400">&copy; 2024 Organo.</p>
        </footer>
    );
};

export default Footer;