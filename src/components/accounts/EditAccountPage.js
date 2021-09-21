import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { editAccount, removeAccount } from '../../actions/accounts';

const EditAccountPage = (props) => {
    return (
        <div>
            <AccountForm
            account={props.account}
            onSubmit={(account) => {
                // TODO: update localStorage
                props.dispatch(editAccount({ id: props.account.accountId }, account));
                props.history.push('/accounts');
            }} />
            <button onClick={() => {
                props.dispatch(removeAccount({ id: props.account.accountId }))
                props.history.push('/accounts');
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        account: state.accounts.find((account)  => account.accountId === state.activeAccount.activeAccountId)
    };
};

export default connect(mapStateToProps)(EditAccountPage);