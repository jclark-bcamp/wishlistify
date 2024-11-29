// import { useState, useEffect, MouseEventHandler } from "react";
// import { Link } from "react-router-dom";

// const MainPage = () => {
//   return (
//     <div>
//       <h1>Main Page</h1>
//       <Link to="/login">Login</Link>
//     </div>
//   )
// };

// export default MainPage;


import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { UserData } from "../interfaces/UserData";
// import ErrorPage from "./ErrorPage";
import auth from '../middleware/auth';
import UserList from "../components/users/users";
import { retrieveUsers } from "../api/userapi.tsx";

const Home = () => {

    const [users, setUsers] = useState<UserData[]>([]);
    // const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (loginCheck) {
            fetchUsers();
            navigate('/'); // Redirect to gift page on successful login
        }
    }, [loginCheck, navigate]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            // setError(true);
        }
    }

    // if (error) {
    //     return <ErrorPage />;
    // }


    return (
        <>
            {
                // THIS IS A RESTRICTED VIEW
                // IF LOGGED IN (loginCheck is false)
                // -> will show users list
                // IF NOT LOGGED IN
                // -> will show message asking to login
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to view all your gifts or sign up!
                        </h1>
                    </div>
                ) : (
                    <UserList users={users} />
                )}
        </>
    );
};

export default Home;