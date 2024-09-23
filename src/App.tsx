/** @format */

import React from "react";
import LayoutRoot from "./layouts/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayMain from "./layouts/display";

const router = createBrowserRouter([
  {
    element: <LayoutRoot />,
    children: [
      {
        element: <DisplayMain />,
        children: [
          {
            path: "/",
            index: true,
            element: <h1>Hello World</h1>,
          },
          {
            path: "*",
            element: <p>Not Found</p>,
          },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
