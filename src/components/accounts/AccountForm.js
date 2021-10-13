import React from 'react';
import { connect } from 'react-redux';

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
            this.setState(() => ({ error: 'Wprowadź nazwę portfela.' }))
        } else {
            for (const account of this.props.accounts) {
                if (account.name === name) {
                    this.setState(() => ({ error: 'Portfel o podanej nazwie już istnieje.' }))
                    return
                }
            }

            this.setState(() => ({ error: '', name: '' }))
            this.props.onSubmit({name})
        }
    })

    render() {
        return (
            <div className='content-container' style={{marginBottom: '0'}}>                
                <form className='form row' onSubmit={this.onSubmit}>
                    <input
                        className='text-input flex__grow radius-left'
                        type='text'
                        placeholder='Utwórz nowy portfel'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <button className='button radius-right'>Utwórz</button>
                </form>
                {this.state.error && <div className='form__error--compact'>{this.state.error}</div>}
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
