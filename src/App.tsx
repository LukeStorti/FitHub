import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import ClubsPage from "./pages/ClubsPage";
import ClassesPage from "./pages/ClassesPage";
import JoinPage from "./pages/JoinPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/join", element: <JoinPage /> },
        { path: "/clubs", element: <ClubsPage /> },
        { path: "/classes", element: <ClassesPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
