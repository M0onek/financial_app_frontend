import React from 'react';
import { connect } from 'react-redux';

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
            this.setState(() => ({ error: '', name: '' }))
            this.props.onSubmit({ name })

            // TODO: category already exists
        }
    });

    render() {
        return (
            <div className='content-container'>                
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
                    <button className='button'>Save category</button>
                </form>
            </div>
        )
    }
}

export default CategoriesForm;
