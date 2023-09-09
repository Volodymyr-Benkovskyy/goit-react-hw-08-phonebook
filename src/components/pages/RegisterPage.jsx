

import AuthForm from "components/AuthForm/AuthForm";
import { registerUser } from "components/redux/auth/authOperation";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Register Page</h1>
      <AuthForm
        onSubmit={handleRegisterUser}
        submitTitle="Register"
        redirectTo={"/login"}
        linkTitle="Login"
      />
    </>
  );
};

export default RegisterPage;