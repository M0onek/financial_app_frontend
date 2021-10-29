import React from 'react';
import GoalList from './GoalList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const GoalsPage = (props) => (
    <div>
        <div className='summary'>
            <div className='content-container'>
                <h1 className='summary__title'>Cele</h1>
                <div className='summary__actions'>
                    <Link className='button' to='/goals/create'>Dodaj cel</Link>
                </div>  
            </div>
        </div>
        <GoalList />
    </div>
);

const mapStateToProps = (state) => {
    return { accounts: state.accounts }
}

export default connect(mapStateToProps)(GoalsPage);
