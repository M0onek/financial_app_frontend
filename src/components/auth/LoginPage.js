import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Finansify</h1>
            <p>Zarządzaj mądrze swoimi pieniędzmi dzięki tej aplikacji!</p>
            <LoginForm />
        </div>
    </div>
);

export default LoginPage;
