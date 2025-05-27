import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';
import logo from '../../assets/photos/logo.png';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)


    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/marathons"}>Marathons</Link></li>
        <li><Link to={"/addMarathons"}>Add Marathons</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" className='w-18' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex gap-2'>
                        <Link onClick={logOut}>
                            <button className='btn'>Logout</button></Link >
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} className="w-10 h-10 rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* <img src={user?.photoURL || "/default-avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full" /> */}
                    </div> :
                        <>
                            <Link to={'/auth/register'}>
                                <button className="btn">Register</button>
                            </Link>
                            <Link to={'/auth/login'}>
                                <button className="btn">Login</button>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;