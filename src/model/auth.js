import config from "../config/config.json";
import * as EmailValidator from 'email-validator';
import storage from './storage';

const authModel = {
    register: async function register(user) {
        
        const response = await fetch(`${config.base_url}user/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
        });
        
        const result = await response.json();         
        console.log(result);
        if (Object.prototype.hasOwnProperty.call(result, 'errors')) {
            return {
                title: result.errors.title,
                message: result.errors.detail,
                type: "danger",
            };
        }

        return {
            title: "Login",
            message: "Logged in Successfully",
            type: "success",
        };    
    },

    login: async function login(user) {
                
        const response = await fetch(`${config.base_url}auth/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
        });

        const result = await response.json();
        console.log(result);
        
        if (Object.prototype.hasOwnProperty.call(result, 'error')) {
            console.log(result);
            return {
                title: result.error,
                message: result.message,
                type: "danger",
            };
        }
                
        //Store userdata
        const userData = result['user'];        
        
        await storage.storeUser(userData);


        //Store token
        const token = result['token'];
        console.log(token);
        
        await storage.storeToken(token);

        return {
            title: "Login",
            message: "Logged in Successfully",
            type: "success",
        };
    },

    checkEmail: function checkEmail(email) {
        return EmailValidator.validate(email);
    },

    test: function test() {
        console.log(
         'authmodel'
        );
    },

    logout: async function logout() {
        const response = await fetch(`${config.base_url}auth/logout`, {
            method: 'GET',
            // body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
        });
        
        const result = await response.json();         
        console.log(result);
        await storage.deleteToken();
        if (Object.prototype.hasOwnProperty.call(result, 'errors')) {
            return {
                title: result.errors.title,
                message: result.errors.detail,
                type: "danger",
            };
        }

        return {
            title: "Logout",
            message: "Logged out Successfully",
            type: "success",
        };   
    },
};

export default authModel;