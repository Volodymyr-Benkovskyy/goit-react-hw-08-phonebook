 
import { Navigation } from "components/Navigation/Navigation";
import css from "./header.module.css"
import AuthNav from "components/AuthNav/AuthNav";


const Header = () => {
 // const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
     
      <AuthNav />
    </header> 
  )
};

export default Header;