import { IoIosArrowDropdown } from "react-icons/io";

const Hero = () => {
    return (
        <div className="my-24 flex flex-col gap-9 items-center text-center">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="text-lg w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aliquam eos voluptatem qui alias quibusdam ab. Inventore minus nam, maxime iure sequi corrupti ad. Sed, nemo id! Ad, reprehenderit earum.
            </p>
            <button className='flex items-center gap-2 border-solid border-2 border-blue-500 bg-blue-600 rounded p-2 font-medium hover:bg-blue-500'>
                <span>Começar</span>
                <IoIosArrowDropdown className="size-5" />
            </button>
        </div>
    )
};

export default Hero;