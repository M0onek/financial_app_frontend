import React from 'react';
import { connect } from 'react-redux'
import auth from '../../services/auth'

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
        errors.email = validEmailRegex.test(event.target.value) ? '' : 'Niepoprawny adres e-mail.';
    };

    onPasswordChange = (event) => {
        const password = event.target.value;
        this.setState(() => ({ password }));
        let errors = this.state.errors;
        errors.password = event.target.value.length < 8 ? 'Hasło musi mieć minimum 8 znaków' : '';
    };

    onSubmit = ((event) => {
        event.preventDefault();
        if (!this.state.email || !this.state.password || !this.state.name || !validateForm(this.state.errors)) {
            this.setState(() => ({ error: 'Wypełnij poprawnie wszystkie pola.' }))
        } else {
            auth.signup({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }).then(() => {
                this.setState(() => ({ error: '' }));
            }).catch((error) => {
                this.setState(() => ({ error: error.message }));
            })
        }
    })

    render() {
        const {errors} = this.state;
        return (
            <div>
                {this.state.error && <p className="form__alert">{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input className='input'
                        type='text'
                        placeholder='Nazwa konta'
                        value={this.state.name}
                        onChange={this.onNameChange}
                        autoFocus
                    />
                    <input className='input'
                        type='email'
                        placeholder='Adres e-mail'
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    {errors.email.length > 0 && <span className="form__error">{errors.email}</span>}
                    <input className='input'
                        type='password'
                        placeholder='Hasło'
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    {errors.password.length > 0 && <span className="form__error">{errors.password}</span>}
                    <button className='button' style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Utwórz konto</button>
                    <div><a className='anchor' href="/login">Wróć do panelu logowania.</a></div>
                    
                </form>
            </div>
        )
    }
}

export default connect()(SignupForm);
