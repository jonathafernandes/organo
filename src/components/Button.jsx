import PropTypes from 'prop-types';

const Button = ({text}) => {
    return (
        <button className="text border-solid border-2 border-blue-500 bg-blue-600 rounded p-2 font-medium outline-none hover:bg-blue-500">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;