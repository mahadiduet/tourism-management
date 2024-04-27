import { Link } from "react-router-dom";

const Header = () => {

    const menu = <>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300" to='/'>Home</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300">All Tourists Spot</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300">Add Tourists Spot</Link>
        <Link className="p-2 font-mono font-semibold text-xl border-r border-r-1 border-dotted border-gray-400 hover:bg-violet-300">My List</Link>
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
                <Link className="btn" to='/registration'>Sign Up</Link>
                <Link className="btn" to='/login'>Sign In</Link>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;