import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { NewPost, newPostActions, PostDetails, postDetailsLoader, Posts, postsLoader, RootLayout } from './routes'
import './index.css'

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children : [
    { 
      path: '/',
      element: <Posts/>,
      loader: postsLoader,
      children: [
        { path: '/create-post', element: <NewPost />, action: newPostActions },
        { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
      ],
     },
  ]},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
