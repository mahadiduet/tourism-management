import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);
    // console.log(user.displayName);


    const menu = <>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300" to='/'>Home</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300" to='/all_tourism_spot'>All Tourists Spot</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300" to='/add_tourism_spot'>Add Tourists Spot</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300" to='/my_tourism_spot'>My List</Link>
    </>

    const btn = <>
        <Link className="btn" to='/registration'>Sign Up</Link>
        <Link className="btn" to='/login'>Sign In</Link>
    </>

    const profile = <>
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user?.photoURL ? (<img alt="Tailwind CSS Navbar component" src={user.photoURL} />) : (<img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <Link>{user?.displayName ? `${user.displayName}` : ''}</Link>
                    <Link><button onClick={logout}>Logout</button></Link>
                </ul>
            </div>
        </div>
    </>

    return (
        <div className="navbar bg-violet-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl font-bold" to='/'>Wanderers</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                { user ? profile : btn}
            </div>
        </div>
    );
};

export default Header;