import './App.css';
import HomePage from './pages/home/homePage';
import FashionPage from "./pages/fashion/fashionPage";

import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/MGPorfolio",
      element: <HomePage/>
      ,
    },
    {
      path: "/NO",
      element: <div>Page not found</div>,
    },
      {
          path: "/Fashion",
          element: <FashionPage/>,
      },
  ]);

  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}
export default App;
