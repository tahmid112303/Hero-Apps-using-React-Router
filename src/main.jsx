import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import './App.jsx'
import Root from './Components/Root';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import MyApps from './Components/MyApps.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: App },
      { path: "home",
        loader: ()=>fetch("TrendingAppData.json"),
      Component: Home},
      {path: "apps", Component: MyApps}
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
