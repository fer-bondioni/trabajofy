const FormRowSelect = ({ name, value, handleChange, list, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <select
        name={name}
        className="form-select"
        onChange={handleChange}
        value={value}
      >
        {list.map((inputValue, index) => {
          return (
            <option key={index} value={inputValue}>
              {inputValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
