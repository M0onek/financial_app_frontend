import React from 'react';
import AccountForm from './AccountForm';
import AccountList from './AccountList';
import { addAccount } from '../../actions/accounts';
import { connect } from 'react-redux';
import { setActiveAccountId } from '../../actions/activeAccount';

const AccountPage = (props) => (
    <div>
        <AccountList />
        <div className='content-container'>
            <AccountForm
                onSubmit={(account) => {
                    // let accounts = [];
                    // const user = JSON.parse(localStorage.getItem('user'));
                    props.dispatch(addAccount(account));
                    
                }}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return { accounts: state.accounts }
}

export default connect(mapStateToProps)(AccountPage);
