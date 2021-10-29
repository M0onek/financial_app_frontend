import React from "react"
import auth from '../../services/auth'

class RemoveProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    showModal = () => {
        this.setState(() => ({ showModal: true }))
    }

    hideModal = () => {
        this.setState(() => ({ showModal: false }))
    }

    preventClick = (event) => {
        event.stopPropagation()
    }

    onConfirm = (event) => {
        auth.removeUser()
    }

    render() {
        return (
            <div>
                <div className='content-container' style={{ marginTop: '2rem' }}>
                    <button className='button button--red' onClick={this.showModal}>Usuń konto</button>
                </div>
                {
                    this.state.showModal
                    ? <div className="modal-overlay" onClick={this.hideModal}>
                        <div className="modal" onClick={this.preventClick}>
                            <h1>Czy napewno chcesz usunąć konto?</h1>
                            <button className="button button--red" onClick={this.onConfirm}>Tak</button>
                            <button className="button button--gray" style={{marginLeft: '1rem'}} onClick={this.hideModal}>Anuluj</button>
                        </div>
                      </div>
                    : <div></div>
                }
            </div>
        )
    }
}

export default RemoveProfile