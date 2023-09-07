import AuthForm from "components/AuthForm/AuthForm";
import { registerUser } from "components/redux/auth/authOperation";
import { useDispatch } from "react-redux";


const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleRegisterUser = (data) => {
    dispatch(registerUser(data));
  };

  return (
       <>
      <AuthForm
      onSubmit={handleRegisterUser}
      submitTitle="Register" />
       </>

  )

}

   
 
export default RegisterForm;

// creating a request method axois.post  the server firebase