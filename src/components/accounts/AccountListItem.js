import React from 'react';
import { connect } from 'react-redux';
import { editAccount, removeAccount } from '../../actions/accounts';

class AccountListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            edit: false,
            newName: props.name ? props.name : '',
        }
    }

    isNameValid = () => {
        const name = this.state.newName
        if (name.length === 0) return false
        for (const account of this.props.accounts) {
            if (account.name === name) return false
        }
        return true
    }

    onEditClick = () => {
        this.setState({
            edit: !this.state.edit,
            newName: this.state.name,
        })
    }

    onNameChange = (event) => {
        this.setState({
            newName: event.target.value,
        })
    }

    onApplyClick = () => {
        this.props.dispatch(editAccount(
            { id: this.props.accountId },
            { name: this.state.newName }
        ))

        this.setState({
            name: this.state.newName,
            edit: false,
        })
    }

    onDeleteClick = () => {
        this.props.dispatch(removeAccount(
            { id: this.props.accountId },
        ))
    }

    renderEditButtons = () => {
        const validName = this.isNameValid()
        const activeAccount = this.props.accountId === this.props.activeAccountId

        return (
            <div className="list-item__button-group">
                <button className="list-item__button list-item--green material-icons" onClick={this.onApplyClick} disabled={!validName}>done</button>
                <button className="list-item__button list-item--gray material-icons" onClick={this.onEditClick}>clear</button>
                <button className="list-item__button list-item--red material-icons" onClick={this.onDeleteClick} disabled={activeAccount}>delete</button>
            </div>
        )
    }

    renderNormalButtons = () => {
        const activeAccount = this.props.accountId === this.props.activeAccountId

        return (
            <div className="list-item__button-group">
                <button className="list-item__button list-item--blue material-icons" onClick={this.onEditClick}>edit</button>
                <button className="list-item__button list-item--red material-icons" onClick={this.onDeleteClick} disabled={activeAccount}>delete</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className='list-item'>
                    { this.state.edit
                        ? <input type="text" className="list-item__input" value={this.state.newName} onChange={this.onNameChange} autoFocus/>
                        : <h3 className='list-item__title'>{this.state.name}</h3>
                    }
                    { this.state.edit
                        ? this.renderEditButtons()
                        : this.renderNormalButtons()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        accounts: state.accounts,
        activeAccountId: state.activeAccount.activeAccountId,
    }
}

export default connect(mapStateToProps)(AccountListItem);
