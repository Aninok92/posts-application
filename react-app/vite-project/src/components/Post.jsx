import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Post.module.css'

function Post({ id, author, body }) {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.body}>{body}</p>
            </Link>
        </li>
    )     
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default Post;