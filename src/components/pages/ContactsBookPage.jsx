

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { getContacts, removeContacts} from "components/redux/contacts/contactsOperation";
import {  useDispatch, useSelector } from "react-redux"; 
import { selectIsContactsExist } from "components/redux/contacts/selectors";



const ContactsBookPage = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

    const isContactsExist = useSelector(selectIsContactsExist)
    const isUserExist = useSelector(state => state.auth.localId)
    
  
/*  useEffect(() => {
 !isContactsExist && isUserExist && 
    dispatch(getContacts());
  
}, [dispatch, isUserExist, isContactsExist]); */
  useEffect(() => {
  if (isUserExist) {
    // Запускаємо функцію видалення контактів тут, якщо користувач існує.
    if (!isContactsExist) {
      dispatch(getContacts());
    } else {
      dispatch(removeContacts()); // Припустимо, що ця функція видаляє контакти.
    }
  }
}, [dispatch, isUserExist, isContactsExist]);

 
    
  return (
      
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 style={{ textAlign: 'center' }}>Contacts list</h2>
      <ContactList />
      {isLoading && !error && <p>Contacts...</p>}
    </>
  )
      
 
};

export default ContactsBookPage;





// creating  fix pages home, login, register