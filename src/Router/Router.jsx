import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from './../Pages/ListedBooks/ListedBooks';
import PagesRead from "../Pages/PagesRead/PagesRead";
import BookDetails from './../Pages/BookDetails/BookDetails';
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

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
        {
          path: '/faq',
          element: <FAQ/>,
        },
        {
          path: '/contact',
          element: <Contact/>,
        },
        {
          path: '/book-details/:bookId',
          element: <BookDetails/>,
          // loader: 
        },
      ]
    },
]);

export default router;