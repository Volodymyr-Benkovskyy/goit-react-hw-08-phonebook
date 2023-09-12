import { NavLink } from 'react-router-dom';
import css from './AuthNavList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'components/redux/auth/authSlice';
import { selectIsAuth } from 'components/redux/auth/authselector';

const AuthNavList = () => {
  const dispatch = useDispatch();
   const isAuth = useSelector(selectIsAuth)
  return (
<nav>
  {!isAuth ? (
    <>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>

      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </>
  ) : (
          <NavLink className={css.link}
             onClick={() => dispatch(logOut())}
          >
                Logout
        
         </NavLink>
  )}
</nav>
    
  );
};

export default AuthNavList;