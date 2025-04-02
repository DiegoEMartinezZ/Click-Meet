const MenuButton = ({ icon: Icon, text }) => {
  return (
    <>
      <li className="bg-clickmeet-orange flex items-center justify-center py-3 w-60 rounded-xl m-auto my-4 cursor-pointer">
        <Icon className="mx-2" />
        <h1>{text}</h1>
      </li>
    </>
  );
};

export default MenuButton;
