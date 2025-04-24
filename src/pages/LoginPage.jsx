import { useState } from "react";
import LoginForm from "../UI/forms/login/LoginForm";
import SignUpForm from "../UI/forms/login/SignUpForm";
import Title from "../UI/txt/Title";
import ClientNavBar from "../UI/navbar/ClientNavBar";
import RolSession from "../UI/txt/RolSession";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <ClientNavBar />
      <RolSession rol={"Client"} />
      <Title />
      {showLoginForm ? (
        <LoginForm onSwitchForm={toggleForm} />
      ) : (
        <SignUpForm onSwitchForm={toggleForm} />
      )}
    </>
  );
};

export default LoginPage;
