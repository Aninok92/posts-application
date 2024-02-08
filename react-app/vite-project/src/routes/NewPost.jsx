import { useNavigate, Form, redirect } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './NewPost.module.css'

// eslint-disable-next-line react/prop-types
function NewPost(){
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..')
    }


    return (
        <Modal>
        <Form method='post' className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} name="body"></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required name="author"/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={closeHandler}>Cancel</button>
                <button>Submit</button>
            </p>
        </Form>
        </Modal>
    )
}

export default NewPost

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData)
    const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    return redirect('/')
} 