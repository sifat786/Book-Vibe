import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from './../Pages/ListedBooks/ListedBooks';
import PagesRead from "../Pages/PagesRead/PagesRead";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/listed',
          element: <ListedBooks/>
        },
        {
          path: '/pages',
          element: <PagesRead/>,
        },
      ]
    },
]);

export default router;