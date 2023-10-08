import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const users = useLoaderData();
    //state data
    // state -=-> loader
    // useEffect
    // fetch --> state set --> set state
    return (
        <div className="text-center shadow-sm">
            <h2> Users : {users.length}</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
           </div>
        </div>
    );
};

export default Users;