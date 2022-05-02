import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  userFetchRequested, userFetchSucceeded, userFetchFailed, setUser, setViewProfile
} from '../store';
<<<<<<< HEAD
import { fetchProfile, fetchCurrentUser } from '../services/api';
import { TAPIError, TAPIProfile, TAPIAuth } from '../services/api.types';
import makeErrorMessage from '../services/helpers/make-error-message';
=======
import { fetchProfile } from '../services/api';
import { TAPIError, TAPIProfile } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
>>>>>>> develop

const getUserProfileThunk: AppThunk = (user: string) => async (dispatch) => {
  try {
    dispatch(userFetchRequested());
    const {
      data: {
        profile
      }
    } = await fetchProfile(user.slice(1)) as AxiosResponse<TAPIProfile>;
    dispatch(setViewProfile(
     profile
    ));
    dispatch(userFetchSucceeded());
  } catch (error) {
    dispatch(userFetchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default getUserProfileThunk;


