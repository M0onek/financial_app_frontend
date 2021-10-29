import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import RemoveProfile from './RemoveProfile';

const SettingsPage = () => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Ustawienia</h1>
                <h2 className="summary__title" style={{marginTop: '1rem'}}>Zmiana hasła</h2>
            </div>            
        </div>

        <ChangePasswordForm/>

        <div className='summary'>
            <div className='content-container'>
                <h2 className='summary__title'>Usuń konto</h2>
            </div>            
        </div>

        <RemoveProfile/>
    </div>
)

export default SettingsPage;