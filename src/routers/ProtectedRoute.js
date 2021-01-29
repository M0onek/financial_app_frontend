import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';
import { connect } from 'react-redux';
import Header from '../components/Header';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user');
    return (
        <Route 
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return (
                        <div>
                            <Header />
                            <Component {...props} />
                        </div>
                    )
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location
                                }
                            }}
                        /> 
                    )
                }
            }}
        />
    )
}

export default connect()(ProtectedRoute);
