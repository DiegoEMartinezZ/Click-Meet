const Input = ({ field }) => {
  return (
    <>
      <input
        type="text"
        className="bg-clickmeet-white rounded-lg text-sm py-1 px-3 w-60 my-1"
        placeholder={field}
      />
    </>
  );
};

export default Input;
