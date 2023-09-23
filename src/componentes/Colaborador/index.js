import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corFundo }) => {
  //Forma diferente de recerber os argumentos/desistruturando a lista
  return (
    <div className="colaborador">
      <div className="cabeçalho" style={{ backgroundColor: corFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
