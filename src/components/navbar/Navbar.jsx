import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-6 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Products</Link>
            </li>

            {/* Signup */}
            {/* {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""} */}

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>Account</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </Link>
            </li>
            {cartItems.length}
        </ul>
    )
    return (
        <nav className="bg-blue-900 sticky top-0">
            {/* Main container */}
            <div className="flex  items-center justify-between py-3 lg:px-3">

                {/* Left - Logo & Name */}
                <div className="flex items-center space-x-2">
                    <Link to={'/'} className="flex items-center space-x-2">
                        <img src="https://i.ibb.co/N21Jwb2V/logo.png" width="40" height="40" alt="logo" />
                        <h2 className="font-bold text-white text-2xl">Mega-Mart</h2>
                    </Link>
                </div>

                {/* Search Bar */}
                <SearchBar />

                {/* Right - Navigation Links */}
                <div className="flex justify-center">
                    {navList}
                </div>

            </div>
        </nav>

    );
}

export default Navbar;
