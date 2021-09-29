import React from 'react';
import { connect } from 'react-redux';
import categories from '../../selectors/categories';

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
            this.setState(() => ({ error: 'Please provide name for your account.' }))
        } else {
            for (const account of this.props.accounts) {
                if (account.name === name) {
                    this.setState(() => ({ error: 'Account already exists.' }))
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
                    <button className='button'>Add account</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        accounts: state.accounts,
    }
}

export default connect(mapStateToProps)(AccountForm);
