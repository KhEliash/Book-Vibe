// import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
// import { getStoredBooks } from "../../Utility/LocalStorage";
// import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
  // const books = useLoaderData();
  // const [addedBooks, setAddedBooks] = useState([]);

  // useEffect(() => {
  //   const storedBooks = getStoredBooks();
  //   if (books.length) {
  //     const addedBooks = books.filter((book) =>
  //       storedBooks.includes(book.bookId)
  //     );

  //     setAddedBooks(addedBooks);
  //     // console.log(books, storedBooks, addedBooks);
  //   }
  // }, [books]);
  return (
    <div>
      <div className="flex items-center justify-center font-bold text-3xl bg-gray-200 py-6 rounded-lg">
        <h1>Books</h1>
      </div>

      <div className="mt-5 flex gap-7">
        <Link>Read Books</Link>

        <Link to={"wishlist"}>WishList</Link>
       
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
