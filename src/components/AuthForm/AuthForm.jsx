
import { useState } from 'react';
import css from './AuthForm.module.css';

const AuthForm = ({onSubmit,submitTitle}) => {

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
      <button type="submit">{submitTitle}</button>
    </form>
  );
};



export default AuthForm;

// Component AuthForm ,  function loginUserApi , operetion loginUser 