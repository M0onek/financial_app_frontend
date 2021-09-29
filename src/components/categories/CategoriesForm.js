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
            this.setState(() => ({ error: 'Please provide name for your category.' }))
        } else {
            for (const category of this.props.categories) {
                if (category.name === name) {
                    this.setState(() => ({ error: 'Category already exists.' }))
                    return
                }
            }

            this.setState(() => ({ error: '', name: '' }))
            this.props.onSubmit({name})
        }
    })

    render() {
        return (
            <div className='content-container margin-top'>                
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input
                        className='text-input'
                        type='text'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                        autoFocus
                    />
                    <button className='button'>Add category</button>
                </form>
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