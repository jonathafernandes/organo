import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

import { IoIosArrowDropdownCircle } from "react-icons/io";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className="mx-4 text-3xl text-center font-semibold">Crie e gerencie seus times. Comece agora!</h1>
        <IoIosArrowDropdownCircle className="text-blue-500" size={30}/>
      </div>
      <Main />
      <hr className="w-1/2 my-40 mx-auto" />
      <Footer />
    </div>
  );
}

export default App;
