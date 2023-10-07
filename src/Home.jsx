import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;