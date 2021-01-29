import React from 'react';
import auth from '../../services/auth';

const RemoveProfilePage = () => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Options</h1>
            </div>            
        </div>
        <div className='content-container'>
            <button className='button button--secondary' onClick={() => { auth.removeUser() }}>Remove Profile</button>
        </div>
    </div>
)

export default RemoveProfilePage;