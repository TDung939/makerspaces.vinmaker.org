import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import Cookies from 'js-cookie'
import { STRAPI_URL } from "../lib/const";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => checkUserLoggedIn(), [])
    //Register user 
    const register = async ({name, email, pass}) => {
        try {
            const res = await axios.post(`${STRAPI_URL}/auth/local/register`, {
              username: name,
              email: email,
              password: pass,
            });
        
            // res.data contains data for authenticated user
            setUser(res.data.user)
            Cookies.set('cresdential', res.data.jwt, { expires: 7, path: "/" })
            Router.push('/')
          } catch (err) {
            console.log(err)
            setError(err)
            setError(null)
          }
    }
    //Login user
    const login = async ({email:identifier, pass}) => {
        try {
            const res = await axios.post(`${STRAPI_URL}/auth/local`, {
              identifier: identifier,
              password: pass,
            });
        
            // res.data contains data for authenticated user
            setUser(res.data.user)
            Cookies.set('cresdential', res.data.jwt, { expires: 7, path: "/" })
            Router.push('/')
          } catch (err) {
            console.log(err)
            setError(err)
            setError(null)
          }
    }
    //Logout user
    const logout = async () => {
        Cookies.remove('cresdential')
        setUser(null)
        Router.push('/')
        console.log('Logout');
    }
    //Check if user is logged in
    const checkUserLoggedIn = async (user) => {
        const token = Cookies.get('cresdential')
        // When the user is authenticated, don't let the user visit the
        // sign-in and sign-up routes
        if (token){
            const res = await axios.get(`${STRAPI_URL}/users/me`, {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
            });
            console.log(res.data);
            setUser(res.data)
        } else {
            console.log('No user');
            setUser(null)
        }
    }
    return (
        <AuthContext.Provider value={{user, error, register, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext