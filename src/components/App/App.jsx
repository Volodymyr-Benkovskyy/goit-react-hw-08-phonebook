//import ContactsBookPage from "components/pages/ContactsBookPage";
import {  Route, Routes , Navigate} from "react-router-dom";

import MainLayout from "components/MainLayout/MainLayout";
import HomePage from "components/pages/HomePage";
import LoginPage from "components/pages/LoginPage";
import RegisterPage from "components/pages/RegisterPage";
import ContactsBookPage from "components/pages/ContactsBookPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurUser } from "components/redux/auth/authOperation";
//import { selectIsAuth } from "components/redux/auth/authselector";


const App = () => {
 // const isAuth = useSelector(selectIsAuth);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser())
  },[dispatch])

  return (
    <>
    
   <Routes>  
    <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/contacts" element={<ContactsBookPage/> }/>
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    </Route>
   <Route path="*" element={<Navigate to="/login" />} /> 
 </Routes>
    
    </>
  );
};

export default App;
  
  //  <ContactsBookPage />

        //    <Routes>
        //   <Route path="/" element={<MainLayout />}>
        //     <Route index element={<HomePage />} />
        //     <Route path="/register" element={<RegisterPage />} />
        //       <Route path="/login" element={<LoginPage />} />
        //     {/*  <Route path="/contacts" element={<ContactsBookPage />} /> */}
              
        //      <Route path="*" element={<Navigate to="/login" />} /> 
        //   </Route>
        // </Routes> 

       
        

     