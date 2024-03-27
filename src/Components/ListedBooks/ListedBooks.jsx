// import { useEffect, useState } from "react";
import { useState } from "react";
import "./ListedBooks.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { getStoredBooks } from "../../Utility/LocalStorage";
// import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex items-center justify-center font-bold text-3xl bg-gray-200 py-6 rounded-lg md:h-[250px]">
        <h1>Books</h1>
      </div>
      {/* sort */}
      <div className="flex items-center justify-center mt-4 mb-10 ">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 text-white">Sort By <span className="font-bold"><IoIosArrowDown/></span></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
            <li>
              <a>Ratings</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* read and wish */}
      <div className="tabs-container mt-5   tabs tabs-lifted   " role="tablist">
        <div className="tabs">
          <Link
            className={`tab ${activeTab === 1 ? "active-tab " : "tab"}`}
            onClick={() => handleTabClick(1)}
          >
            Read Books
          </Link>
          <Link
            to={"wishlist"}
            className={`tab ${activeTab === 2 ? "active-tab" : "tab"}`}
            onClick={() => handleTabClick(2)}
          >
            WishList
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
