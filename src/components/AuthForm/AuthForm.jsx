
import { useState } from 'react';
import css from './AuthForm.module.css';
import { Link } from 'react-router-dom';

const AuthForm = ({onSubmit,submitTitle,redirectTo,linkTitle}) => {

    const [form, setForm] = useState({
     email: "",
     password: "",
   });

   const handleChange = (event) => {
     const { name, value } = event.target;
     setForm((prev) => ({ ...prev, [name]: value }))
    
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log("fech==>", form);
     onSubmit(form)
    
    };
    
     return (
    <form onSubmit={handleSubmit} className={css.form} >
    
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
         </label>
         
         <div className={css.buttonlink}> 
         <button type="submit">{submitTitle}</button>
        <Link to={redirectTo}>
           <button >{linkTitle}</button>
       </Link>
         </div>
     
    </form>
  );
};



export default AuthForm;

// Component AuthForm ,  function loginUserApi , operetion loginUser 