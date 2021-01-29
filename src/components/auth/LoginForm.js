import React from 'react';
import { connect } from 'react-redux'

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
    };

    onEmailChange = (event) => {
        const email = event.target.value;
        this.setState(() => ({ email }));
        let errors = this.state.errors;
        errors.email = validEmailRegex.test(event.target.value) ? '' : 'Email is not valid!';
    };

    onPasswordChange = (event) => {
        const password = event.target.value;
        this.setState(() => ({ password }));
        let errors = this.state.errors;
        errors.password = event.target.value.length < 8 ? 'Password length: 8' : '';
    };

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.email || !this.state.password || !validateForm(this.state.errors)) {
            this.setState(() => ({ error: 'Please provide correct email and password.' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password
            })
        }
    })

    render() {
        const {errors} = this.state;
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input className='input'
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        autoFocus
                    />
                    {errors.email.length > 0 && <span>{errors.email}</span>}
                    <input className='input'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    {errors.password.length > 0 && <div>{errors.password}</div>}
                    <button className='button'>Login</button>
                    <div><a className='anchor' href="/signup">Create an account.</a></div>
                </form>
            </div>
        )
    }
}

export default connect()(LoginForm);
