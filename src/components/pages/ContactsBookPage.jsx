

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { getContactsApi } from "components/redux/contacts/contactsOperation";
import {  useDispatch, useSelector } from "react-redux"; 
import { selectIscontactsExist } from "components/redux/contacts/selectors";



const ContactsBookPage = () => {

    const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const isContactsExit = useSelector(selectIscontactsExist)

    
  useEffect(() => {
    !isContactsExit && dispatch(getContactsApi())
  }, [dispatch, isContactsExit]);

    
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