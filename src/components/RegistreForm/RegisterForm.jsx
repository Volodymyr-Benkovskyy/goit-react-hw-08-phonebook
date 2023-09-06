
import { useState } from 'react';
import css from './RegisterForm.module.css';
import { registerUserApi } from 'components/redux/firebaseApi';

const RegisterForm = () => {
   
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
     registerUserApi(form)
       .then(console.log)
     
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

// creating a request method axois.post  the server firebase