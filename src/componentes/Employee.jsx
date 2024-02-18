import PropTypes from 'prop-types';

import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Employee = ({ employee, bgColor, onDelete, onFavorite }) => {
  function handleFavorite() {
    onFavorite(employee.id);
  }

  const propsFavorite = {
    size: 25,
    onClick: handleFavorite
  };

  return (
    <div>
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => onDelete(employee.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={employee.imagem} alt={employee.nome} />
      </div>
      <div className="rodape">
        <h4>{employee.nome}</h4>
        <h5>{employee.cargo}</h5>
        <div className="favoritar">
          {employee.favorito ? (
            <AiFillHeart {...propsFavorite} color="ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    favorito: PropTypes.bool.isRequired
  }),
  bgColor: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired
};

export default Employee;
