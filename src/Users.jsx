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
           <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
           </div>
        </div>
    );
};

export default Users;