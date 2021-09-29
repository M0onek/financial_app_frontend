import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Financial_app</h1>
            <p>Manage your money wisely with this app!</p>
            <LoginForm />
        </div>
    </div>
);

export default LoginPage;
