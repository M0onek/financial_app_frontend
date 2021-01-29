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
            <div>
                <select
                    className='select'
                    value={this.props.activeAccount.activeAccountId}
                    onChange={this.onAccountsChange} label='Choose active account'>
                    <option disabled value='default'>Choose account</option>
                    {this.accountOptions(this.props.accounts)}
                </select>
            </div>
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
