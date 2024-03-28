import { Link, useLoaderData } from "react-router-dom";
import { getStoredWish } from "../../Utility/LocalStorage2";
import { useEffect, useState } from "react";
import { MdOutlineContactPage } from "react-icons/md";
import { GoLocation, GoPeople } from "react-icons/go";

const WishList = () => {
  const books = useLoaderData();
  const [addedWish, setAddedWish] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredWish();
    if (books.length > 0) {
      const bookApplied = [];
      for (const bookId of storedBooks) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          bookApplied.push(book);
        }
      }
      setAddedWish(bookApplied);
    }
  }, []);
  console.log(addedWish);

  return (
    <div className="mt-4">
      {addedWish.map((b) => (
        <div
          key={b.id}
          className="flex flex-col md:flex-row  border rounded-xl p-5 gap-6 mb-4 space-y-4 items-center"
        >
          <div className="bg-gray-100 w-[230px] flex  items-center justify-center py-6 rounded-xl">
            <img src={b.image} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold text-lg">{b.bookName}</h1>
            <p className="text-gray-500">By : {b.author}</p>
            {/* <div className=""> */}
            <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4 space-y-5">
              <h2 className="space-x-2 md:space-x-4 flex  items-center text-sm md:text-base">
                <h2 className="font-bold">Tag</h2>
                <span className="bg-gray-200 p-2 rounded-full text-green-500 font-bold">
                  {b.tags[0]}
                </span>
                <span className="bg-gray-200 p-2 rounded-full text-green-500 font-bold">
                  {b.tags[1]}
                </span>
              </h2>
              <p className="flex items-center gap-2 font-bold">
                <span>
                  <GoLocation />
                </span>{" "}
                Year of Publishing : {b.yearOfPublishing}
              </p>
            </div>

            <div className="flex gap-3 md:gap-10  items-center space-y-1 my-4">
              <p className="flex gap-2 items-center text-sm md:text-base">
                <span>
                  <GoPeople />{" "}
                </span>{" "}
                Publisher: <span>{b.publisher}</span>
              </p>
              <p className="flex gap-2 items-center text-sm md:text-base">
                <span>
                  <MdOutlineContactPage />
                </span>
                Page: <span>{b.totalPages}</span>
              </p>
            </div>

            <hr />
            <div className="flex items-center gap-2 md:gap-6 mt-4 text-sm md:text-base">
              <p className="bg-blue-200 text-blue-500 p-2 rounded-full">
                Category : {b.category}
              </p>
              <p className="bg-orange-200 text-orange-500 p-2 rounded-full">
                Ratings : {b.category}
              </p>
              <Link to={"/viewDetails"}>
                <button className="bg-green-500 text-white p-2 rounded-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
};

export default WishList;
