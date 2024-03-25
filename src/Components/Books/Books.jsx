import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
// import Book from "./Book/Book";
// import Books from './Books';

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
          <div key={b.id} className="border flex flex-col items-center justify-start w-full rounded-xl">
            <img src={b.image} alt="" className="bg-gray-100" />
            <p className="flex gap-2 text-green-500 font-bold bg-gray-100 p-2 rounded-full">
                <span>{b.tags[0]}</span>
                <span>{b.tags[1]}</span>
                </p>
            <h1>{b.bookName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
