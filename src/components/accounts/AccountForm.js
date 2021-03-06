import React from 'react';
import { connect } from 'react-redux';

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.account ? props.account.name : '',
            error: ''
        };
    };
    
    onNameChange = (event) => {
        const name = event.target.value;
        this.setState(() => ({ name }));
    }

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.name) {
            this.setState(() => ({ error: 'Please provide name for your account.' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name
            })
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
                    <button className='button'>Save Account</button>
                </form>
            </div>
        )
    }
}

export default AccountForm;
