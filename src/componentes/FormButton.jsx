import PropTypes from 'prop-types';

const FormButton = ({text}) => {
    return (
        <button className="text border-solid border-2 border-blue-500 bg-blue-600 rounded p-2 font-medium hover:bg-blue-500">
            {text}
        </button>
    )
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired
};

export default FormButton;