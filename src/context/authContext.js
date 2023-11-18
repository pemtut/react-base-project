import { createContext, useReducer } from 'react';
import { AUTH_ACTION_TYPE } from '../enums';
import { removeAllLocalStorage } from '../utils/storage';
import { getToken } from '../utils/token';

//Reducer
const AUTH_INIT_STATE = {
  isSignedIn: getToken() ? true : false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
      };
    case AUTH_ACTION_TYPE.LOGOUT:
      return AUTH_INIT_STATE;
    default:
      return state;
  }
};

//Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INIT_STATE);

  const login = (userData) => {
    dispatch({ type: AUTH_ACTION_TYPE.LOGIN, payload: userData });
  };

  const logout = () => {
    removeAllLocalStorage();
    dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
