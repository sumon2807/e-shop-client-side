import React from 'react';
import { FaUserLarge, FaCartShopping } from "react-icons/fa6";
import logo from '../../../public/assets/images/logo/Logotype Boutique Fashion Neon.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img className=' w-28 h-28' src={logo} alt="" />
                    <input type="text" placeholder="Search" className="input input-bordered w-full" />
                </div>
                <div className="navbar-end">
                    <ul className="menu lg:menu-horizontal rounded-box">
                        <li>
                            <a><FaUserLarge />Login</a>
                        </li>
                        <li>
                            <a><span className="badge badge-xs badge-info"></span>Sign Up</a>
                        </li>
                        <li>
                            <a><FaCartShopping /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;