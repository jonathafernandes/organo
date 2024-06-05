import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import { IoIosArrowDropdownCircle } from "react-icons/io";

function App() {
  return (
    <>
      <Header />
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className="mx-1 text-3xl text-center font-semibold sm:mx-4">Crie e gerencie seus times. Comece agora!</h1>
        <IoIosArrowDropdownCircle className="text-blue-500" size={30}/>
      </div>
      <Main />
      <hr className="w-1/2 my-40 mx-auto" />
      <Footer />
    </>
  );
}

export default App;
