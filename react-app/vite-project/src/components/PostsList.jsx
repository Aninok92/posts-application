import { useLoaderData } from 'react-router-dom';

import Post from './Post.jsx'
import classes from './PostList.module.css'

function PostsList() {
    const posts = useLoaderData();
   
    return (
        <>
         {posts.length > 0 ? 
                <ul className={classes.posts}>
                    {posts.map(({ id, author, body }) => (
                        <Post key={id} id={id} author={author} body={body} />
                    ))}
                </ul>
            : 
                <div>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </>
    );
}

export default PostsList;