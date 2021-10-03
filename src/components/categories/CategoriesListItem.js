import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import { editExpenseCategory, removeExpenseCategory } from '../../actions/expenseCategories';
import { editIncomeCategory, removeIncomeCategory } from '../../actions/incomeCategories';

class CategoriesListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            categoryId: props.categoryId ? props.categoryId : '',
            edit: false,
            newName: props.name ? props.name : '',
        }
    }
    
    getCategoryAmount = (values = []) => {
        let categoryAmount = 0;
        values.forEach(val => {
            if (val.accountId === this.props.activeAccountId && val.categoryId === this.state.categoryId) {
                let amount = parseFloat(val.amount)
                categoryAmount += amount
            }
        });
        return numeral(categoryAmount).format('0,0.00')
    }

    isNameValid = () => {
        const name = this.state.newName
        if (name.length === 0) return false
        for (const category of this.props.categories) {
            if (category.name === name) return false
        }
        return true
    }

    onEditClick = () => {
        this.setState({
            edit: !this.state.edit,
            newName: this.state.name,
        })
    }

    onNameChange = (event) => {
        this.setState({
            newName: event.target.value,
        })
    }

    get editCategory() {
        return this.props.income ? editIncomeCategory : editExpenseCategory
    }

    get removeCategory() {
        return this.props.income ? removeIncomeCategory : removeExpenseCategory
    }

    onApplyClick = () => {
        this.props.dispatch(this.editCategory(
            { id: this.props.activeAccountId },
            { id: this.props.categoryId},
            { name: this.state.newName }
        ))

        this.setState({
            name: this.state.newName,
            edit: false,
        })
    }

    onDeleteClick = () => {
        this.props.dispatch(this.removeCategory(
            { id: this.props.activeAccountId },
            { id: this.props.categoryId }
        ))
    }

    renderEditButtons = () => {
        const validName = this.isNameValid()

        return (
            <div className="list-item__button-group">
                <button className="list-item__button list-item--green material-icons" onClick={this.onApplyClick} disabled={!validName}>done</button>
                <button className="list-item__button list-item--gray material-icons" onClick={this.onEditClick}>clear</button>
                <button className="list-item__button list-item--red material-icons" onClick={this.onDeleteClick}>delete</button>
            </div>
        )
    }

    renderNormalButtons = () => {
        return (
            <div className="list-item__button-group">
                <button className="list-item__button list-item--green material-icons" onClick={this.onEditClick}>edit</button>
                <button className="list-item__button list-item--red material-icons" onClick={this.onDeleteClick}>delete</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className='list-item'>
                    { this.state.edit
                        ? <input type="text" className="list-item__input" value={this.state.newName} onChange={this.onNameChange} autoFocus/>
                        : <h3 className='list-item__title'>{this.state.name}</h3>
                    }
                    <h3 className='list-item__data'>Łącznie: {this.getCategoryAmount(this.props.values)} zł</h3>
                    { this.state.edit
                        ? this.renderEditButtons()
                        : this.renderNormalButtons()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const income = props.mode === "income"
    return {
        values: income ? state.incomes : state.expenses,
        categories: income ? state.incomeCategories : state.expenseCategories,
        activeAccountId: state.activeAccount.activeAccountId,
        income
    }
}

export default connect(mapStateToProps)(CategoriesListItem);
