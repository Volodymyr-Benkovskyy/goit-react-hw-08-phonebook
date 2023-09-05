import { NavLink } from 'react-router-dom';
import css from './AuthNavList.module.css';

 const AuthNavList = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNavList;