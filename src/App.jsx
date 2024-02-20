import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Main from "./componentes/Main";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <hr className="w-1/2 mx-auto" />
      <Main />
      <hr className="w-1/2 mx-auto" />
      <Footer />
    </div>
  );
}

export default App;
