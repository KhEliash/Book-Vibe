import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import Root from "./Components/Root/Root.jsx";
import PagesRead from "./Components/PagesRead/PagesRead.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ReadBooks from "./Components/ReadBooks/ReadBooks.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import ViewDetails from "./Components/ViewDetails/ViewDetails.jsx";
import Error from "./Components/Error/Error.jsx";
import AboutUs from "./Components/About/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <ListedBooks></ListedBooks>,
        // loader: () => fetch("Books.json"),
        children: [
          {
            index: true,
             
            element:<ReadBooks></ReadBooks>,
            loader: () => fetch("../public/Books.json")
        },
          {
             
            path:'wishlist',
            element: <WishList></WishList>,
            loader: () => fetch("../public/Books.json")
        }
      ],
      },
      {
        path: "/read",
        element: <PagesRead></PagesRead>,
        loader: () => fetch("../public/Books.json")
      },
      {
        path: "/details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/Books.json"),
      },
      {
        path: "/viewDetails",
        element: <ViewDetails></ViewDetails>,
       },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
       },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
