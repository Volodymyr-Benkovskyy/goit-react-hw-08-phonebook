import axios from 'axios';

const API_KEY = 'AIzaSyDQsDfRLcaeNcWOv1sGPVJy21j-T36_BsQ';

axios.defaults.baseURL = 'https://volodymyr-1-default-rtdb.firebaseio.com';

const baseUrl = {
  DB: 'https://volodymyr-1-default-rtdb.firebaseio.com',
  AUTH: 'https://identitytoolkit.googleapis.com/v1',
};

const setBaseUrl = url => (axios.defaults.baseURL = url);

export const registerUserApi = userForm => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      '/accounts:signUp',
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => ({
      idToken,
      email,
      refreshToken,
      localId,
    }));
};
export const loginUserApi = userForm => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      '/accounts:signInWithPassword',
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }));
};

/* {
  "localId": "ZY1rJK0eYLg...",
  "email": "[user@example.com]",
  "displayName": "",
  "idToken": "[ID_TOKEN]",
  "registered": true,
  "refreshToken": "[REFRESH_TOKEN]",
  "expiresIn": "3600"
} */
//'{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'

// https://volodymyr-1-default-rtdb.firebaseio.com

//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//Sample response  ==> те що повертає бекент

// {
//   "idToken": "[ID_TOKEN]",
//   "email": "[user@example.com]",
//   "refreshToken": "[REFRESH_TOKEN]",
//   "expiresIn": "3600",
//   "localId": "tRcfmLH7..."
// }
