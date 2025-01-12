import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBooksAdd } from "../../Utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  removeBookFromWishlist,
  saveBooksWish,
} from "../../Utility/LocalStorage2";

const BookDetails = () => {
  const books = useLoaderData();

  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);

  const handleRead = () => {
    const storedBooks = getStoredBooks();
    const isBookInWishlist = storedBooks.includes(bookIdInt);
    console.log(isBookInWishlist);
    if (isBookInWishlist) {
      removeBookFromWishlist(bookIdInt);
    }

    // const storedBooks = getStoredBooks();
    const isBookInRead = storedBooks.includes(bookIdInt);
    if (isBookInRead) {
      toast.error("This book is already in your Read Books");
    } else {
      saveBooksAdd(bookIdInt);
      toast.success("Added successfully in Read Books");
    }
  };

  const handleWish = () => {
    saveBooksWish(bookIdInt);

    const storedBooks = getStoredBooks();
    const isBookInRead = storedBooks.includes(bookIdInt);
    if (isBookInRead) {
      toast.error("This book is already in your Read Books");
    } else {
      saveBooksWish(bookIdInt);
      toast.success("Added successfully in Wishlist");
    }
  };

  return (
    <div className="flex gap-5 flex-col md:flex-row px-4">
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl py-6 md:py-0">
        <img src={book.image} alt="" className="h-auto md:h-96" />
      </div>

      {/* right */}
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl font-bold">{book.bookName}</h1>
        <p className="font-bold text-gray-500">By: {book.author}</p>
        <hr className="border-dashed bg-green-300" />
        <p className="text-xl">{book.category}</p>
        <hr className="border-dashed bg-green-300" />
        <p>
          <span className="font-bold">Review : </span> {book.review}
        </p>
        <h2 className="flex items-center gap-5">
          <span className="font-bold">Tag </span>{" "}
          <span className="text-green-500 bg-gray-200 p-2 rounded-full">
            {book.tags[0]}
          </span>{" "}
          <span className="text-green-500 bg-gray-200 p-2 rounded-full">
            {book.tags[1]}
          </span>
        </h2>
        <hr className="border-dashed bg-green-300" />

        <div className="w-96 text-left space-y-5">
          <p className="flex justify-between">
            <span>Number of Pages : </span>{" "}
            <span className="font-bold">{book.totalPages}</span>
          </p>
          <p className="flex justify-between">
            <span>Publisher:</span>{" "}
            <span className="font-bold">{book.publisher}</span>
          </p>
          <p className="flex justify-between">
            <span>Year of Publishing:</span>{" "}
            <span className="font-bold">{book.yearOfPublishing}</span>
          </p>
          <p className="flex justify-between">
            <span>Rating:</span>{" "}
            <span className="font-bold">{book.rating}</span>
          </p>
        </div>

        <div className="flex gap-5">
          <button
            onClick={handleRead}
            className="border  p-7 font-bold rounded-lg"
          >
            Read
          </button>
          <button
            onClick={handleWish}
            className="   p-7 font-bold bg-[#50B1C9] text-white rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
