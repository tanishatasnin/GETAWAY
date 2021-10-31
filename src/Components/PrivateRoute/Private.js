import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth';
// ________ this is my private route ______ 
const Private = ({ children, ...rest }) => {
               const { user,loading } = useAuth();
               if (loading)
                return <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
                ;
               return (
                              <div>
                                       <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>      
                              </div>
               );
};

export default Private;