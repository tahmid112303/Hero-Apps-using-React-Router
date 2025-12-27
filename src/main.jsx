import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import './App.jsx'
import Root from './Components/Root';
import Home from './Components/Home.jsx';
import MyApps from './Components/MyApps.jsx';
import AppDetail from './Components/AppDetail.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import MyAppDetail from './Components/MyAppDetail.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, 
        loader: ()=>fetch('TrendingAppData.json'),
        Component: Home 
      },

      { path: "*",
        Component: ErrorPage
      },

      {
        path: "home/:id",
        loader: async ({ params }) => {
          const res = await fetch("/TrendingAppData.json");
          const data = await res.json();
          return data.find(app => app.id == params.id);
        },
        Component: AppDetail
      },

      {path: "apps",
      loader: ()=>fetch("AllAppData.json"),
      Component: MyApps},

      { path: "apps/:id",
        loader: async({params})=>{
          const res =await fetch("AllAppData.json");
          const data=await res.json();
          return data.find(app => app.id == params.id)
        },
        Component: MyAppDetail
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)