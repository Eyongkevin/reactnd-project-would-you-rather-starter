import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Login from './Login';

const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated
                ? <Component {...props} />
                : <Login />
        )}
    />
);

export default ProtectedRoute;