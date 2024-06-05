import PropTypes from 'prop-types';

const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  type = "text"
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label>{label}</label>
      <input
        className='bg-zinc-800 border border-gray-400 rounded p-2 h-9 mb-3 placeholder:text-zinc-500 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
        required={required}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string
};

export default TextField;
