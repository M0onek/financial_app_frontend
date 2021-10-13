import React from 'react';
import AccountForm from './AccountForm';
import AccountList from './AccountList';
import { addAccount } from '../../actions/accounts';
import { connect } from 'react-redux';

const AccountPage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Portfele</h1>        
            </div>
            
            <AccountForm
                onSubmit={(account) => {
                    props.dispatch(addAccount(account));
                }}
            />
        </div>
        <AccountList />
    </div>
);

const mapStateToProps = (state) => {
    return { accounts: state.accounts }
}

export default connect(mapStateToProps)(AccountPage);
