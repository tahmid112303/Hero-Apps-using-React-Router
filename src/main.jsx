import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import './App.jsx'
import Root from './Components/Root';
import NavBar from './Components/NavBar';
import App from './App.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: App },
      // { path: "settings", Component: Settings },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
