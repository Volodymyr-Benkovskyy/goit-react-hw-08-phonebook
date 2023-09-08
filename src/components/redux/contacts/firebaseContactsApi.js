import axios from 'axios';

axios.defaults.baseURL =
  'https://bookcontacts-47551-default-rtdb.firebaseio.com';

export const addContactsApi = items => {
  return axios.post('/contacts.json', items).then(res => {
    const { data } = res;
    return { ...items, id: data.name };
  });
};

export const getContactApi = () => {
  return axios
    .get('/contacts.json')
    .then(({ data }) =>
      Object.entries(data).map(([id, dataForm]) => ({ id, ...dataForm }))
    );
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}.json`).then(res => res.data);
};
