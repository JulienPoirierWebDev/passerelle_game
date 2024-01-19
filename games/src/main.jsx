import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/home/index.jsx";
import ChifumiPage from "./pages/chifumi/index.jsx";
import ProposPage from "./pages/apropos/ProposPage.jsx";
import SimonPage from "./pages/simon/index.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/simon", element: <SimonPage /> },
      { path: "/chifumi", element: <ChifumiPage /> },
      { path: "/apropos", element: <ProposPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
