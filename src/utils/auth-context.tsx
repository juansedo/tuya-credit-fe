import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useReducer, createContext } from 'react';

export const AuthContext = createContext({});

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.accessToken,
                refreshToken: action.refreshToken,
                isLoading: false,
            };
        case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                userToken: action.accessToken,
                refreshToken: action.refreshToken,
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
                refreshToken: null,
            };
    }
};

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    refreshToken: null,
};

export default function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);


    const authContext = {
        signIn: async (email: string, password: string) => {
            try {
                const response = await fetch('http://34.135.136.87/auth/login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
                const responseJson = await response.json();
                if (!('access_token' in responseJson)) {
                    throw new Error('Invalid credentials');
                }
                await SecureStore.setItemAsync('access_token', responseJson.access_token);
                await SecureStore.setItemAsync('refresh_token', responseJson.refresh_token);
                dispatch({
                    type: 'SIGN_IN',
                    accessToken: responseJson.access_token,
                    refreshToken: responseJson.refresh_token
                });
            }
            catch (error) {
                return error.message;
            }
        },
        signOut: async () => {
            await SecureStore.deleteItemAsync('access_token');
            await SecureStore.deleteItemAsync('refresh_token');
            dispatch({ type: 'SIGN_OUT' });
        },
        refresh: async () => {
            try {
                const access_token = await SecureStore.getItemAsync('access_token');
                const refresh_token = await SecureStore.getItemAsync('refresh_token');
                if (access_token && refresh_token) {
                    dispatch({ type: 'RESTORE_TOKEN', access_token, refresh_token });
                }
            }
            catch (error) { }
        },
        state: state,
        isLoggedIn: !!state.userToken,
    }

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
}
