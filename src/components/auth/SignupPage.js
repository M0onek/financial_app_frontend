import React from 'react';
import SignupForm from './SignupForm';

const SignupPage = () => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Finansify</h1>
            <p>Zarządzaj mądrze swoimi pieniędzmi dzięki tej aplikacji!</p>
            <SignupForm />
        </div>
    </div>
);

export default SignupPage;
