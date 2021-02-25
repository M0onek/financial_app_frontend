import React from 'react';
import { connect } from 'react-redux'

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
    };

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState(() => ({ name }));
    };

    onEmailChange = (event) => {
        const email = event.target.value;
        this.setState(() => ({ email }));
        let errors = this.state.errors;
        errors.email = validEmailRegex.test(event.target.value) ? '' : 'Email is not valid';
    };

    onPasswordChange = (event) => {
        const password = event.target.value;
        this.setState(() => ({ password }));
        let errors = this.state.errors;
        errors.password = event.target.value.length < 8 ? 'Password must be 8' : '';
    };

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.email || !this.state.password || !this.state.name || !validateForm(this.state.errors)) {
            this.setState(() => ({ error: 'Please fill in every field correctly!' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
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
                        type='text'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                        autoFocus
                    />
                    <input className='input'
                        type='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    {errors.email.length > 0 && <span>{errors.email}</span>}
                    <input className='input'
                        type='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    {errors.password.length > 0 && <span>{errors.password}</span>}
                    <button className='button'>Sign Up</button>
                    <div><a className='anchor' href="/login">Login.</a></div>
                    
                </form>
            </div>
        )
    }
}

export default connect()(SignupForm);
