import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import goalTypes from '../../selectors/goal-types';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalType: props.goal ? props.goal.goalType : 'default',
            name: props.goal ? props.goal.name : '',
            amount: props.goal ? props.goal.amount.toString() : '',
            categoryId: props.goal ? (props.goal.categoryId !== null ? props.goal.categoryId : '__all__') : 'default',
            error: ''
        };
    };

    onGoalTypeChange = (event) => {
        const goalType = event.target.value;
        this.setState(() => ({ goalType }))
    }

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState(() => ({ name }));
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onCategoryChange = (event) => {
        const categoryId = event.target.value;
        this.setState(() => ({ categoryId }))
    }

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.amount || this.state.goalType === 'default' || this.state.categoryId === 'default') {
            this.setState(() => ({ error: 'Wypełnij wszystkie pola.' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                goalType: this.state.goalType,
                name: this.state.name,
                amount: parseFloat(this.state.amount),
                categoryId: this.state.categoryId !== '__all__' ? this.state.categoryId : null
            })
        }
    })

    goalsOptions = () => {
        let options = [];
        for (let goalType in goalTypes) {
            options.push(<option key={goalType} value={goalType}>{goalTypes[goalType].name}</option>)
        }
        return options;
    }

    categories = () => {
        const goalType = this.state.goalType
        if (goalType === 'default') return
        const mode = goalTypes[goalType].mode
        
        let options = [ <option key="__all__" value='__all__'>-- Wszystkie --</option> ]

        if (mode === 'income') {
            for (let category of this.props.incomeCategories) {
                options.push(<option key={category.categoryId} value={category.categoryId}>{category.name}</option>)
            }
        }

        if (mode === 'expense') {
            for (let category of this.props.expenseCategories) {
                options.push(<option key={category.categoryId} value={category.categoryId}>{category.name}</option>)
            }
        }

        return options;
    }

    render() {
        return (
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input
                        className='text-input'
                        type='text'
                        placeholder='Nazwa'
                        value={this.state.name}
                        onChange={this.onNameChange}
                        autoFocus
                    />
                    <select
                        className='select'
                        value={this.state.goalType} 
                        onChange={this.onGoalTypeChange}>
                        <option disabled value='default'>Wybierz typ celu</option>
                        {this.goalsOptions()}
                    </select>
                    <input
                        className='text-input'
                        type='text'
                        placeholder='Wartość'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <select
                        className='select'
                        value={this.state.categoryId} 
                        onChange={this.onCategoryChange}>
                        <option disabled value='default'>Wybierz kategorie</option>
                        {this.categories()}
                    </select>
                    <div>
                        <button className='button'>Zapisz</button>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomeCategories: state.incomeCategories,
        expenseCategories: state.expenseCategories,
    }
}

export default connect(mapStateToProps)(GoalForm)
