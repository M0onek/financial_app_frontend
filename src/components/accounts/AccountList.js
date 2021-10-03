import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountListItem from './AccountListItem';

const AccountList = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Portfele</h1>        
            </div>    
        </div>
        <div className='content-container'>
            <div className='list-header'>Portfele</div>
            {props.accounts.map((account) => {
                return <AccountListItem key={account.accountId} {...account} />
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps)(AccountList);
