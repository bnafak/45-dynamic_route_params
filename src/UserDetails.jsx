
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email} = user;
    return (
        <div>
            <h2>Details ablout user: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    );
};

export default UserDetails;