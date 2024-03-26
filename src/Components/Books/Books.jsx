// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


import Book from "../Book/Book";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(books);

  return (
    <div className="mt-24">
      <h1 className="text-4xl text-center font-bold mb-10">Books</h1>

      <div className="grid  md:grid-cols-3   justify-items-center gap-6 ">
        {books.map((b) => (
          <Book key={b.id} b={b}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
