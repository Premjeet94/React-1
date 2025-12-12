import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { About } from "./components/About.js";
import { Error } from "./components/Error.js";
import { Contact } from "./components/Contact.js";
import { Profile } from "./components/Profile.js";
import { ResMenu } from "./components/ResMenu.js";
import { Shimmer } from "./components/Shimmer.js";
import { Provider } from "react-redux";
import AppStore from "./utils/Appstore.js";
import { Cart } from "./components/Cart.js";

const AppLayout = () => {
  return (
    <div className=" w-screen px-8 py-8 flex flex-col   items-center ">
      <Provider store={AppStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};


const Grocery = lazy(() => import("./components/Grocery.js"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/menu/:resId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
