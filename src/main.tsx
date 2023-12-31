import React from "react";
import ReactDOM from "react-dom/client";

// import { FliptalkScheduler } from "./pages/FliptalkScheduler";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Index } from "./pages/Index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
