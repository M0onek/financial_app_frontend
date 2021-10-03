import React from 'react';
import AccountForm from './AccountForm';
import AccountList from './AccountList';
import { addAccount } from '../../actions/accounts';
import { connect } from 'react-redux';

const AccountPage = (props) => (
    <div>
        <AccountList />
        <AccountForm
            onSubmit={(account) => {
                props.dispatch(addAccount(account));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { accounts: state.accounts }
}

export default connect(mapStateToProps)(AccountPage);
