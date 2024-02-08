import { Link } from 'react-router-dom';
import classes from './Post.module.css'

// eslint-disable-next-line react/prop-types
function Post({id, author, body}) {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.body}>{body}</p>
            </Link>
        </li>
    )     
}

export default Post;