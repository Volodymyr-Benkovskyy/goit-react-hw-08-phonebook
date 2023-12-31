import { refreshToken } from '../auth/authOperation';

export const errorHandler =
  ({ error, cb }) =>
  dispatch => {
    if (error.response.status === 400 || error.response.status === 401) {
      setTimeout(() => {
        dispatch(refreshToken(cb));
      }, 0);
    }
  };
