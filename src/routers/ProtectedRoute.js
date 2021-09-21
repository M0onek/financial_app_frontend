import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';
import { connect } from 'react-redux';
import Menu from '../components/Menu';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user');
    return (
        <Route 
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return (
                        <div>
                            <Menu />
                            <div className="menu__margin">
                                <Component {...props} />
                            </div>
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
