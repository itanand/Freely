import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import ErrorPage from "./pages/error/ErrorPage";
import Business from "./pages/business/Business";
import Education from "./pages/education/Education";

import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = () => {
    return (
      <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
         {
           path: "/",
           element: <Home />
         },
         {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/business",
          element: <Business />
        },
        {
          path: "/education",
          element: <Education />
        },
        {
          path: "/",
          element: <Message />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "*",
          element: <ErrorPage />
        }
      ]
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
