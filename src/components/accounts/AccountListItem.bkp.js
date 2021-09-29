import React from 'react';
import { Link } from 'react-router-dom';

const AccountListItem = ({ name, accountId }) => (
    <div>
        <Link className='list-item' to={`/accounts/${accountId}/edit`}>
            <h3 className='list-item__title'>{name}</h3>
        </Link>
    </div>
);

export default AccountListItem;
