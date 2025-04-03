const Select = ({ text, value, onChange, options, name, required }) => {
  return (
    <>
      <div className="flex flex-col gap-1 w-60 my-1 bg-clickmeet-white m-auto rounded-lg">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="bg-clickmeet-white rounded-lg text-sm py-1 px-2"
        >
          <option value="">{text}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
