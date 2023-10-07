import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center">
            <h2>Navbar</h2>
            <nav >
                <Link className="mr-6" to='/'>Home</Link>
                <Link className="mr-6" to='/about'>About</Link>
                <Link className="mr-6 text-center" to='/contact'>Contact Us</Link>
                <Link className="mr-6 text-center" to='/Users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;