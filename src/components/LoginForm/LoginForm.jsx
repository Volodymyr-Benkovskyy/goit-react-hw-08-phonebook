
import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'components/redux/auth/authOperation';

 const LoginForm = () => {
 
    const dispatch = useDispatch();

  const handleLoginUser = (data) => {
    dispatch(loginUser(data));
  };


  return (
    <>
      < AuthForm
         onSubmit={handleLoginUser}
         submitTitle="Login"
      />
    </>
  );
};

export default  LoginForm;