import { createSelector } from '@reduxjs/toolkit';

export const getStoreContacts = state => state.contacts.items;
export const getStoreFilter = state => state.filter;
export const selectorFilteredContacts = createSelector(
  [getStoreContacts, getStoreFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectIsContactsExist = state =>
  Boolean(getStoreContacts(state).length);

//const isContactsExist = useSelector((state) => Boolean(state.contacts.length));
