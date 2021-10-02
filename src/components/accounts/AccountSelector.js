import React from 'react';
import { connect } from 'react-redux';
import { setActiveAccountId } from '../../actions/activeAccount';
import { getIncomes } from '../../actions/incomes';
import { getExpenses } from '../../actions/expenses';
import { getIncomeCategories } from '../../actions/incomeCategories';
import { getExpenseCategories } from '../../actions/expenseCategories';

class AccountSelector extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
        }
    }

    onAccountsChange = (event) => {
        const accountId = event.target.value
        this.setState({ expanded: false })
        localStorage.setItem('activeAccountId', accountId)

        this.props.dispatch(setActiveAccountId({ accountId }))
        this.props.dispatch(getExpenseCategories({ id: accountId }))
        this.props.dispatch(getIncomeCategories({ id: accountId }))
        this.props.dispatch(getExpenses({ id: accountId }))
        this.props.dispatch(getIncomes({ id: accountId }))

        if (this.props.onChanged) this.props.onChanged()
    }

    accountOptions = (accounts) => {
        return accounts.map((account) => (
            <option
                key={account.accountId}
                value={account.accountId}
                onClick={this.onAccountsChange}
                className={account.accountId === this.props.accountId ? 'select-account__active' : undefined}>
                {account.name}
            </option>
        ))
    }

    toggle = () => this.setState({ expanded: !this.state.expanded })

    render() {
        const rootClass = !this.state.expanded ? 'select-account__root select-account--collapsed' : 'select-account__root'

        return (
            <div className="menu__header-item">
                <span className="material-icons menu__icon" onClick={this.toggle}>person_outline</span>
                <div className={rootClass}>
                    <div className='select-account' onClick={this.toggle}>
                        <div className='select-account__text'>{this.props.name}</div>
                        <div className="material-icons select-account__icon">arrow_drop_down</div>
                    </div>
                    <div className='select-account__options'>
                        <div className='select-account__options-content'>
                            {this.accountOptions(this.props.accounts)}
                        </div>
                    </div>
                </div>
                <div className="select-account__overlay" onClick={this.toggle}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const accountId = state.activeAccount.activeAccountId
    const activeAccount = state.accounts.length === 0 ? null : state.accounts.find((account) => account.accountId === accountId)
    return {
        accounts: state.accounts,
        ...activeAccount,
    }
}

export default connect(mapStateToProps)(AccountSelector)
