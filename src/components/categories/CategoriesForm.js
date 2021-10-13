import React from 'react';
import { connect } from 'react-redux';
import categories from '../../selectors/categories';

class CategoriesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.category ? props.category.name : '',
            error: ''
        };
    };
    
    onNameChange = (event) => {
        const name = event.target.value
        this.setState(() => ({ name }))
    }

    onSubmit = ((event) => {
        event.preventDefault()
        const name = this.state.name

        if (!name) {
            this.setState(() => ({ error: 'Wprowadź nazwę kategorii.' }))
        } else {
            for (const category of this.props.categories) {
                if (category.name === name) {
                    this.setState(() => ({ error: 'Kategoria o podanej nazwie już istnieje.' }))
                    return
                }
            }

            this.setState(() => ({ error: '', name: '' }))
            this.props.onSubmit({name})
        }
    })

    render() {
        return (
            <div style={{marginLeft: '2rem'}}>                
                <form className='form' style={{flexDirection: 'row'}} onSubmit={this.onSubmit}>
                    <input
                        className='text-input flex__grow radius-left'
                        type='text'
                        placeholder='Dodaj nową kategorię'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <button className='button radius-right'>Dodaj</button>
                </form>
                {this.state.error && <div className='form__error--compact'>{this.state.error}</div>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        categories: props.mode === "income"
            ? categories(state.incomeCategories, state.activeAccount)
            : categories(state.expenseCategories, state.activeAccount),
    }
}

export default connect(mapStateToProps)(CategoriesForm);