import { Link } from "react-router-dom";
import img from "../../assets/Images/Cover.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 md:h-[554px] md:px-28 flex items-center justify-between mt-4 rounded-xl">
      <div className="flex-1  w-full space-y-12">
        <div className="space-y-5">
          <h1 className="text-6xl font-bold">
            Books to freshen <br />{" "}
          </h1>
          <h1 className="text-6xl font-bold">up your bookshelf</h1>
        </div>
        <div>
          <Link to={"/books"}>
            {" "}
            <button className="bg-[#23BE0A] py-3 px-5 text-white font-bold rounded-lg">
              View The List
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
