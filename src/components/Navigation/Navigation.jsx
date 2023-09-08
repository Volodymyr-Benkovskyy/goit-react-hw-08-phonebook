import { NavLink } from 'react-router-dom';
//import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'components/redux/auth/authselector';

export const Navigation = () => {
//const { isLoggedIn } = useAuth();
  
  const isAuth = useSelector(selectIsAuth)

  return (
    <nav> 
      
       <NavLink className={css.link} to="/">
        Home
      </NavLink> 
      
      {isAuth && (
        <NavLink className={css.link} to="/contacts">
          Contacts Book
        </NavLink>)}
     
    </nav>
  );
};

export default Navigation;