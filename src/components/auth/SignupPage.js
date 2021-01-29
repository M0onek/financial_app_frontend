import React from 'react';
import SignupForm from './SignupForm';
import auth from '../../services/auth';

const SignupPage = () => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Financial_app</h1>
            <p>Manage your money wisely with this app!</p>
            <SignupForm
                onSubmit={(user) => {
                    auth.signup(user);
                }}
            />
        </div>
    </div>
);

export default SignupPage;
