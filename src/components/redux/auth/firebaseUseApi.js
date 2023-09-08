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

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]

// запит який повертає localId, email

export const getCurUserApi = idToken => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post('accounts:lookup', { idToken }, { params: { key: API_KEY } })
    .then(respons => {
      const { localId, email } = respons.data.users[0];
      return { localId, email };
    });
};

/* {
  "users": [
    {
      "localId": "ZY1rJK0...",
      "email": "user@example.com",
      "emailVerified": false,
      "displayName": "John Doe",
      "providerUserInfo": [
        {
          "providerId": "password",
          "displayName": "John Doe",
          "photoUrl": "http://localhost:8080/img1234567890/photo.png",
          "federatedId": "user@example.com",
          "email": "user@example.com",
          "rawId": "user@example.com",
          "screenName": "user@example.com"
        }
      ],
      "photoUrl": "https://lh5.googleusercontent.com/.../photo.jpg",
      "passwordHash": "...",
      "passwordUpdatedAt": 1.484124177E12,
      "validSince": "1484124177",
      "disabled": false,
      "lastLoginAt": "1484628946000",
      "createdAt": "1484124142000",
      "customAuth": false
    }
  ]
 */

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
