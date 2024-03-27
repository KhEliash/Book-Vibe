// import { useEffect, useState } from "react";
import { useState } from "react";
import "./ListedBooks.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
// import { getStoredBooks } from "../../Utility/LocalStorage";
// import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex items-center justify-center font-bold text-3xl bg-gray-200 py-6 rounded-lg">
        <h1>Books</h1>
      </div>

      <div className="tabs-container mt-5">
        <div className="tabs">
          <Link
            className={`tab ${activeTab === 1 ? "active-tab " : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Read Books
          </Link>
          <Link
            to={"wishlist"}
            className={`tab ${activeTab === 2 ? "active-tab" : ""}`}
            onClick={() => handleTabClick(2)}
          >
           WishList
          </Link>
        </div>
      </div>

      {/* <div className="mt-5 flex gap-7">
        <Link>Read Books</Link>

        <Link to={"wishlist"}>WishList</Link>
      </div> */}
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
