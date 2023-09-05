
import { useState } from 'react';
import css from './RegisterForm.module.css';

 const RegisterForm = () => {
   const [form, setForm] = useState({
     email: "",
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
        Username
        <input
          type="text"
          name="name"
          value={form.name}
          onchange={handleChange}
        />
         
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onchange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
         onchange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

//   handleChange  handleSubmit