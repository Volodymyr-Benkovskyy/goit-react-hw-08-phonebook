
import { useState } from 'react';
import css from './LoginForm.module.css';

 const LoginForm = () => {
 
   const [form, setForm] = useState({
     Email: "",
     password: "",
   });

   const handleChange = (event) => {
     const { name, value } = event.target
     setForm((prev) => ({ ...prev, [name]: value }))
   };

   const handleSubmit = (event) => {
     event.preventDefault()
     
   };


  return (
    <form onSubmit={handleSubmit} className={css.form}  autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}/>
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default  LoginForm;