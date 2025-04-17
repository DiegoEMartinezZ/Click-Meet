import { useState } from "react";
import LoginForm from "../UI/forms/login/LoginForm";
import SignUpForm from "../UI/forms/login/SignUpForm";
import Navbar from "../UI/navbar/Navbar";
import Title from "../UI/txt/Title";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <Navbar />
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