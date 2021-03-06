import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountSelector from './accounts/AccountSelector';
import auth from '../services/auth';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linkDisabled: this.props.activeAccountId ? false : true
        }
        console.log(this.state.linkDisabled);
    }

    handleClick = (event) => {
        const { linkDisabled } = this.state
        if( !this.props.activeAccountId ) event.preventDefault()
    }

    render() {
        return (
            <header className='header'>
                <div className='content-container'>
                    <div className='header__content'>
                        <Link className='header__title' to='/home'><h1>Financial_app</h1></Link>

                        <AccountSelector />
        
                        <NavLink className='header__link' to='/accounts' activeClassName='active'><h3>Accounts</h3></NavLink>

                        <NavLink className='header__link' to={`/expense_categories`} activeClassName='active' ><h3>Expense Categories</h3></NavLink>
                        
                        <NavLink className='header__link' to={`/income_categories`} activeClassName='active' ><h3>Income Categories</h3></NavLink>                       
        
                        <NavLink className='header__link' to='/profile' activeClassName='active'><h3>Options</h3></NavLink>

                        <button className='header__link header__link--logout' onClick={() => {
                            auth.logout();
                        }}><h3>Logout</h3></button>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(Header);
