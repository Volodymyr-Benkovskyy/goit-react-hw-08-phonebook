import AuthForm from "components/AuthForm/AuthForm";
//import LoginForm from "components/LoginForm/LoginForm";
import { loginUser } from "components/redux/auth/authOperation";
import { useDispatch } from "react-redux";


const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Login Page</h1>
      <AuthForm
        submitTitle="Login"
        onSubmit={handleLoginUser}
        redirectTo="/register"
        linkTitle={"Register"}
      />
    </>
  );
};


export default LoginPage;
