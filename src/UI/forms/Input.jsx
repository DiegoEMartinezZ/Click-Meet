const Input = ({ field, value, onChange, name, type }) => {
  return (
    <>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-clickmeet-white rounded-lg text-sm py-1 px-3 w-60 my-1"
        placeholder={field}
      />
    </>
  );
};

export default Input;
