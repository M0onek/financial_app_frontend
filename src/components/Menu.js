import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountSelector from './accounts/AccountSelector';
import auth from '../services/auth';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        const collapsed = this.isSmallScreen() ? true : localStorage.getItem("menuCollapsed") === "true"

        this.state = {
            menuCollapsed: collapsed,
        }
    }

    isSmallScreen = () => window.innerWidth < 900

    onNavClick = () => {
        if (this.isSmallScreen()) {
            this.setState({
                menuCollapsed: true
            })
        }
    }

    onMenuClick = () => {
        const collapsed = !this.state.menuCollapsed
        if (!this.isSmallScreen()) localStorage.setItem("menuCollapsed", collapsed ? "true" : "false")

        this.setState({
            menuCollapsed: collapsed
        })
    }

    render() {
        return (
            <nav className={this.state.menuCollapsed ? 'menu menu--collapsed' : 'menu'}>
                <div className='menu__header'>
                    <div className="menu__header-item">
                        <span className="material-icons menu__icon" onClick={this.onMenuClick}>menu</span>
                        <NavLink className="menu__title menu__text" to="/dashboard" activeClassName="active">
                            <h1>Finansify</h1>
                        </NavLink>
                    </div>
                    <AccountSelector onChanged={this.onNavClick}/>
                </div>

                <ul className="menu__list">
                    <hr className="menu--collapsed-only"/>

                    <li className="menu__list-item">
                        <NavLink className="menu__link" to="/dashboard" activeClassName="active" onClick={this.onNavClick}>
                            <span className="material-icons menu__icon">dashboard</span>
                            <span className="menu__text">Panel</span>
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__link" to="/charts" activeClassName="active" onClick={this.onNavClick}>
                            <span className="material-icons menu__icon">bar_chart</span>
                            <span className="menu__text">Wykresy</span>
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__link" to="/categories" activeClassName="active" onClick={this.onNavClick}>
                            <span className="material-icons menu__icon">bookmark_border</span>
                            <span className="menu__text">Kategorie</span>
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__link" to="/profiles" activeClassName="active" onClick={this.onNavClick}>
                            <span className="material-icons menu__icon">account_balance_wallet</span>
                            <span className="menu__text">Portfele</span>
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__link" to="/settings" activeClassName="active" onClick={this.onNavClick}>
                            <span className="material-icons menu__icon">settings</span>
                            <span className="menu__text">Ustawienia</span>
                        </NavLink>
                    </li>

                    <hr/>

                    <li className="menu__list-item">
                        <a href="#" className="menu__link" onClick={auth.logout}>
                            <span className="material-icons menu__icon">logout</span>
                            <span className="menu__text">Wyloguj</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeAccountId: state.activeAccount.activeAccountId
    }
}

export default connect(mapStateToProps)(Menu);
