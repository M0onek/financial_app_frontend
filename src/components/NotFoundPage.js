import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to='/login'>Wróć do panelu logowania</Link>
    </div>
);

export default NotFoundPage;
