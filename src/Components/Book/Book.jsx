import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { data } from "autoprefixer";

// import BookDetails from "../BookDetails/BookDetails";

const Book = ({ b }) => {
  const { bookId, image, tags, bookName, author, category, rating } = b;
  return (
    <Link to={`/details/${bookId}`} className=" w-full">
      <div className="border flex flex-col items-center justify-start w-full rounded-xl p-6 space-y-4 shadow-lg">
        <div className="bg-gray-100 w-full flex items-center justify-center p-5 rounded-xl">
          <img src={image} alt="" className="" />
        </div>
        <div className="text-left w-full space-y-4">
          <p className="flex gap-2 text-green-500 font-bold">
            <span className=" bg-gray-100 p-2 rounded-full">{tags[0]}</span>
            <span className=" bg-gray-100 p-2 rounded-full">{tags[1]}</span>
          </p>
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <h2 className="font-bold text-gray-500">By: {author}</h2>
          <hr className="border-dashed border my-4" />
          <div className="flex justify-between font-bold text-gray-500">
            <h2 className="font-bold text-gray-500">{category}</h2>
            <h2 className="flex items-center gap-1">
              <span>{rating}</span>{" "}
              <span>
                {" "}
                <FaRegStar />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
