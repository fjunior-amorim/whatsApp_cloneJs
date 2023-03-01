import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conversations from './routers/conversations/Conversations';
import Status from './routers/status/Status';
import Community from './routers/community/Community';
import Calls  from './routers/calls/Calls';
import Contacts from './routers/Contacts/Contacts';
import NewContact from './routers/Contacts/new Contact/NewContact';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
      {path: "community", element: <Community />},
      {path: "conversations", element: <Conversations />},
      {path: "status", element: <Status />},
      {path: "calls", element: <Calls />},
      {path: "status", element: <Status />}
      
    ]
  },
  { path: "/contacts",element: <Contacts /> },
  {path: "/newContact",element: <NewContact />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
