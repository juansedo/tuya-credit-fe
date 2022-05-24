import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useReducer, createContext } from 'react';
import axios from 'axios';

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

    const axiosAuth = axios.create();

    const refresh = async () => {
        if (state.refreshToken) {
            try {
                const refreshToken = state.refreshToken;
                const response = await axios.post('http://34.135.136.87/auth/refresh', [], {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`,
                    },
                });
                const { access_token, refresh_token } = response.data;
                await SecureStore.setItemAsync('refreshToken', refresh_token);
                dispatch({ type: 'RESTORE_TOKEN', accessToken: access_token, refreshToken: refresh_token });
                return access_token;
            }
            catch (error) {
                console.log(error)
            }

        }
    }

    axiosAuth.interceptors.request.use(
        async (config) => {
            if (state.userToken) {
                config.headers["Authorization"] = "Bearer " + state.userToken; // for Node.js Express back-end
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosAuth.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;
            if (err.response) {
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        const token = await refresh();
                        originalConfig.headers["Authorization"] = "Bearer " + token;
                        return axiosAuth(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err);
        }
    );

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
                console.log(responseJson);
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
                const accessToken = await SecureStore.getItemAsync('access_token');
                const refreshToken = await SecureStore.getItemAsync('refresh_token');
                if (!!accessToken && !!refreshToken) {
                    dispatch({ type: 'RESTORE_TOKEN', accessToken, refreshToken });
                }
                refresh();
            }
            catch (error) { }
        },
        state: state,
        isLoggedIn: !!state.userToken,
        axiosAuth: axiosAuth,
    }

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
}
