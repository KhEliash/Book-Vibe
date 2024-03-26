import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);

  return (
    <div className="mt-24">
      <h1 className="text-4xl text-center font-bold mb-10">Books</h1>

      <div className="grid  md:grid-cols-3   justify-items-center gap-6">
        {books.map((b) => (
          <div
            key={b.id}
            className="border flex flex-col items-center justify-start w-full rounded-xl p-6 space-y-4"
          >
            <div className="bg-gray-100 w-full flex items-center justify-center p-5 rounded-xl">
              <img src={b.image} alt="" />
            </div>
            <div className="text-left w-full space-y-4">
              <p className="flex gap-2 text-green-500 font-bold">
                <span className=" bg-gray-100 p-2 rounded-full">
                  {b.tags[0]}
                </span>
                <span className=" bg-gray-100 p-2 rounded-full">
                  {b.tags[1]}
                </span>
              </p>
              <h1 className="text-2xl font-bold">{b.bookName}</h1>
              <h2 className="font-bold text-gray-500">By: {b.author}</h2>
              <hr className="border-dashed border my-4" />
              <div className="flex justify-between font-bold text-gray-500">
                <h2 className="font-bold text-gray-500">{b.category}</h2>
                <h2 className="flex items-center gap-1">
                  <span>{b.rating}</span>{" "}
                  <span>
                    {" "}
                    <FaRegStar />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
