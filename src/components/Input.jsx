const Input = ({ id, label, placeholder, type, value, onChange }) => {
    const isTextarea = type === "textarea";

    return (
    <div className="mb-5">
        <label htmlFor={id} className="block text-gray-700 uppercase font-bold">
        {label}
        </label>
        {isTextarea ? (
        <textarea
            id={id}
            className="input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        ) : (
        <input
            id={id}
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        )}
    </div>
    );
};

export default Input;
