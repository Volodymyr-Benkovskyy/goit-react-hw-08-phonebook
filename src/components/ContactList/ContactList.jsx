

import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {  selectorFilteredContacts } from 'components/redux/contacts/selectors';
import { removeContacts} from 'components/redux/contacts/contactsOperation';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterContactsByName = useSelector(selectorFilteredContacts);

  return (
   
    <ul className={s.contactList}>
      { 
        filterContactsByName.map(({ id, name, number }) => (
          <li key={id} className={s.contactItem}>
            <span>
              {name}: {number}
            </span>
            <button
              className={s.contactBtnDel}
              type="button"
              onClick={() =>
                dispatch(removeContacts(id))}> 
              Delete
            </button>
          </li>
        ))}
    </ul>
    
  );

};

export default ContactList;



     
    
