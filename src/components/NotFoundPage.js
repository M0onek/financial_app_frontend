import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to='/login'>Go to login page</Link>
    </div>
);

export default NotFoundPage;
