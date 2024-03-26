import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBooks = () => {
  const books = useLoaderData();
  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredBooks();
    if (books.length) {
      const addedBooks = books.filter((book) =>
        storedBooks.includes(book.bookId)
      );

      setAddedBooks(addedBooks);
      // console.log(books, storedBooks, addedBooks);
    }
  }, [books]);
  return (
    <div>
      <h1>read</h1>
      {addedBooks.map((b) => (
        <div key={b.id} className="flex   border rounded-xl p-5 gap-6 mb-4 space-y-4 items-center">
          <div className="bg-gray-100 w-[230px] flex items-center justify-center py-6 rounded-xl">
            <img src={b.image} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-lg">{b.bookName}</h1>
            <p className="text-gray-500">By : {b.author}</p>
            {/* <div className=""> */}
             <div className="flex items-center gap-4 space-y-5">
             <h2 className="font-bold">Tag</h2>
              <h2 className="space-x-4">
                <span className="bg-gray-200 p-2 rounded-full text-green-500 font-bold">{b.tags[0]}</span>
                <span className="bg-gray-200 p-2 rounded-full text-green-500 font-bold">{b.tags[1]}</span>
              </h2>
              <p className="flex items-center gap-2 font-bold">
                <span>
                  <GoLocation />
                </span>{" "}
                Year of Publishing : {b.yearOfPublishing}
              </p>
             </div>
              <div className="flex gap-10  items-center space-y-1 my-4">
                <p className="flex gap-2 items-center">
                  <span>
                    <GoPeople />{" "}
                  </span>{" "}
                  Publisher: <span>{b.publisher}</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <MdOutlineContactPage />
                  </span>
                  Page: <span>{b.totalPages}</span>
                </p>
              </div>
              <hr />
              <div className="flex items-center gap-6 mt-4">
                <p className="bg-blue-200 text-blue-500 p-2 rounded-full">Category : {b.category}</p>
                <p className="bg-orange-200 text-orange-500 p-2 rounded-full">Ratings : {b.category}</p>
                <Link to={'/details/:bookId'}>
                <button className="bg-green-500 text-white p-2 rounded-full">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        // </div>
      ))}
    </div>
  );
};

export default ReadBooks;
