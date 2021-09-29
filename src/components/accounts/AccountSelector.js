import React from 'react';
import { connect } from 'react-redux';
import { setActiveAccountId } from '../../actions/activeAccount';
import { getIncomes } from '../../actions/incomes';
import { getExpenses } from '../../actions/expenses';
import { getIncomeCategories } from '../../actions/incomeCategories';
import { getExpenseCategories } from '../../actions/expenseCategories';

class AccountSelector extends React.Component {

    onAccountsChange = (event) => {
        const accountId = event.target.value
        localStorage.setItem('activeAccountId', accountId)
        this.props.dispatch(setActiveAccountId({ accountId }))
        this.props.dispatch(getExpenseCategories({ id: accountId }))
        this.props.dispatch(getIncomeCategories({ id: accountId }))
        this.props.dispatch(getExpenses({ id: accountId }))
        this.props.dispatch(getIncomes({ id: accountId }))
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
