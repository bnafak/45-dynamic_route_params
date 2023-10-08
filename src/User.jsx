import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone } = user;
    return (
        <div className="grid md:grid-cols-2 gap-17 w-96 shadow-sm border">
            <h2 className="p-3 ">{name}</h2>
            <p className="p-3">email: {email}</p>
            <p className="p-3">Phone -{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button className="btn btn-secondary">Click me </button></Link>
        </div>
    );
};

export default User;