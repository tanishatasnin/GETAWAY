import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const Private = ({ children, ...rest }) => {
               const { user,loading } = useAuth();
               if (loading) return 'loading';
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