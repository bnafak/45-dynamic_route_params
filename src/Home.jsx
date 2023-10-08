import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;