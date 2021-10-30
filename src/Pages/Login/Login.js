import React from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                
                    
                <button
                    className="google-btn"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google-plus-g google-bg"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;