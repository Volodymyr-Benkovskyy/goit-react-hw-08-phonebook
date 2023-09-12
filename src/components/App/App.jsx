//import ContactsBookPage from "components/pages/ContactsBookPage";
import React, { useEffect, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "components/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getCurUser } from "components/redux/auth/authOperation";
import { selectIsAuth } from "components/redux/auth/authselector";

const HomePage = lazy(() => import("../pages/HomePage"));
const ContactsBookPage= lazy(() => import("../pages/ContactsBookPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const PrivateRoute = ({component, redirectTo = "/login"}) => {
  const isAuth = useSelector(selectIsAuth)
  return isAuth ? component : <Navigate to={redirectTo}/>
}

const PublicRoute = ({ component, redirectTo = "/" }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const App = () => {
 // const isAuth = useSelector(selectIsAuth);
 
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getCurUser())
   }, [dispatch]);
  
  
  return (
    <>
    
 <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index  element={< HomePage/>} />
          
          <Route path="/contacts" element={<PrivateRoute component={<ContactsBookPage />} />} />
          
          <Route path="/register" element={<PublicRoute component={<RegisterPage />} /> } />
          
           <Route path="/login" element={<PublicRoute component={< LoginPage/>} /> } />
     </Route>
  <Route path="*" element={<Navigate to="/" />} /> 
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

       
        

     