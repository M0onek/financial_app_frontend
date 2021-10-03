import React from 'react';
import auth from '../../services/auth';

const RemoveProfilePage = () => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Ustawienia</h1>
            </div>            
        </div>
        <div className='content-container' style={{ marginTop: '2rem' }}>
            <button className='button button--secondary' onClick={() => { auth.removeUser() }}>Usuń konto</button>
        </div>
    </div>
)

export default RemoveProfilePage;