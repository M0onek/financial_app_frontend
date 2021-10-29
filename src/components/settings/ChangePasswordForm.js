import React from "react"
import auth from '../../services/auth'

class ChangePasswordForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            error: '',
            message: '',
        }
    }

    onCurrentChange = (event) => {
        const value = event.target.value
        this.setState(() => ({ currentPassword: value, error: '', message: '' }))
    }

    onNewChange = (event) => {
        const value = event.target.value
        this.setState(() => ({ newPassword: value, error: '', message: '' }))
    }

    onConfirmChange = (event) => {
        const value = event.target.value
        this.setState(() => ({ confirmPassword: value, error: '', message: '' }))
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { currentPassword, newPassword, confirmPassword } = this.state

        if (!currentPassword || !newPassword || !confirmPassword) {
            this.setState(() => ({ error: 'Wypełnij wszystkie pola.', message: '' }))
            return
        }

        if (newPassword.length < 8) {
            this.setState(() => ({ error: 'Hasło musi mieć minimum 8 znaków.', confirmPassword: '', message: '' }))
            return
        }

        if (newPassword !== confirmPassword) {
            this.setState(() => ({ error: 'Hasła się nie zgadzają.', confirmPassword: '', message: '' }))
            return
        }

        auth.changePassword(currentPassword, newPassword)
        .then(() => {
            this.setState(() => ({ error: '', message: 'Hasło zostało zmienione.', currentPassword: '', newPassword: '', confirmPassword: '' }))
        })
        .catch((error) => {
            this.setState(() => ({ error: error.message, message: '', currentPassword: '', newPassword: '', confirmPassword: '' }))
        })
    }

    render() {
        return (
            <div className='content-container'>
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <div className='form__error'>{this.state.error}</div>}
                    {this.state.message && <div className='form__success'>{this.state.message}</div>}
                    <input
                        className='text-input'
                        type='password'
                        placeholder='Aktualne hasło'
                        value={this.state.currentPassword}
                        onChange={this.onCurrentChange}
                    />
                    <input
                        className='text-input'
                        type='password'
                        placeholder='Nowe hasło'
                        value={this.state.newPassword}
                        onChange={this.onNewChange}
                    />
                    <input
                        className='text-input'
                        type='password'
                        placeholder='Powtórz hasło'
                        value={this.state.confirmPassword}
                        onChange={this.onConfirmChange}
                    />
                    <div>
                        <button className='button'>Zmień hasło</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChangePasswordForm