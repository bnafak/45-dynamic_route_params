import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone } = user;
    return (
        <div className="grid md:grid-cols-2 rounded border">
            <h2 className="p-3 ">{name}</h2>
            <p className="p-3 rounded">email: {email}</p>
            <p className="p-3 rounded">Phone -{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click me </button></Link>
        </div>
    );
};

export default User;