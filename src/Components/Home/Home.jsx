import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Nav from './../Nav/Nav';

 

const Home = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;