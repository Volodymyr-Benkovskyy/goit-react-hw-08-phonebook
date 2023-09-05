//import ContactsBookPage from "components/pages/ContactsBookPage";
import {  Route, Routes , Navigate} from "react-router-dom";

import MainLayout from "components/MainLayout/MainLayout";
import HomePage from "components/pages/HomePage";
import LoginPage from "components/pages/LoginPage";
import RegisterPage from "components/pages/RegisterPage";
import ContactsBookPage from "components/pages/ContactsBookPage";


const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
           <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsBookPage/>} />
          
        <Route path="*" element={<Navigate to="/login" />} />
       </Route>  
      </Routes>
    </>
  )

};
    
export default App;
  
  //  <ContactsBookPage />

  

       
        

     