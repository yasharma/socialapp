import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT, PROFILE_UPDATE } from '../constant';
import {Storage} from '../lib/Storage';
import {Cookie} from '../lib/Cookie';
const initialState = {
  	token: Storage.get('token'),
  	user: Storage.get('user') ? Storage.get('user') : Cookie.get('rememberMe')
};

export const authReducer = (state = initialState, { type, payload, user }) => {
    switch (type) {
    	case AUTH_SUCCESS: {
      		return { ...state, token: payload, user };
    	}
    	case AUTH_FAILURE: {
      		return { ...state, error: payload }
    	}
    	case AUTH_LOGOUT: {
      		return { ...state, token: null, user: Cookie.check('rememberMe') ? Cookie.get('rememberMe') : null }
    	}
    	case PROFILE_UPDATE: {
    		return { ...state, user }
    	}
    	default:
      		return state;
  	}
};