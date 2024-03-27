import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
// get data
const PagesRead = () => {
  const books = useLoaderData();
  const storedBooks = getStoredBooks();
  console.log(storedBooks);

  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredBooks();
    if (books.length > 0) {
      const bookApplied = [];
      for (const bookId of storedBooks) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          bookApplied.push(book);
        }
      }
      setAddedBooks(bookApplied);
    }
  }, [books]);
  console.log(addedBooks);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="bg-gray-100 flex-col space-y-4 rounded-xl flex items-center justify-center p-7">
        <h1 className="text-3xl font-bold">Bar Chart of Read Books</h1>
        {/* <ResponsiveContainer width={700} height="80%" > */}
        <BarChart width={700} height={500} data={addedBooks}>
          <XAxis dataKey="bookName" />
          <YAxis dataKey="totalPages" />

          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {addedBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    </ResponsiveContainer>
  );
};

export default PagesRead;
