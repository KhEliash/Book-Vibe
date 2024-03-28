// import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
// import Nav from './../Nav/Nav';

 

const Home = () => {
    return (
        <div className="container  md:mx-auto ">
             <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;