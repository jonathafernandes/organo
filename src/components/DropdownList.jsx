import PropTypes from 'prop-types';

const DropdownList = ({label, items, value, onChange, required = false}) => {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <select
                className="bg-zinc-800 border border-gray-400 rounded p-2 mb-3 w-7/12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                required={required}
                value={value}
                onChange={evento => onChange(evento.target.value)}
            >
            <option />
                {items.map((item, index) => <option key={`${item}-${index}`}>{item}
            </option>)}
            </select>
        </div>
    )
}

DropdownList.propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};

export default DropdownList;