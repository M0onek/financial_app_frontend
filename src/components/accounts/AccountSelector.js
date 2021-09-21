import React from 'react';
import { connect } from 'react-redux';
import { setActiveAccountId } from '../../actions/activeAccount';

class AccountSelector extends React.Component {

    onAccountsChange = (event) => {
        const accountId = event.target.value
        this.props.dispatch(setActiveAccountId({ accountId }));
    }

    accountOptions = (accounts) => {
        let options = [];
        accounts.forEach((account) => {
            options.push(<option key={account.accountId} value={account.accountId}>{account.name}</option>)
        })
        return options;
    }

    render() {
        return (
            <select
                id="account-selector__select"
                className='select select--account'
                value={this.props.activeAccount.activeAccountId}
                onChange={this.onAccountsChange} label='Choose active account'
                ref={this.selectRef}>
                <option disabled value='default'>Choose account</option>
                {this.accountOptions(this.props.accounts)}
            </select>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        activeAccount: state.activeAccount
    }
}

export default connect(mapStateToProps)(AccountSelector)
