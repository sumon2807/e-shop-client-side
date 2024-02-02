import React from 'react';
import logo from '../../../public/assets/images/logo/Logotype Boutique Fashion Neon.png'
import Container from '../Shared/Container/Container';
import { Link } from 'react-router-dom';
import ManuDropdown from '../../Component/ManuDropdown/ManuDropdown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-md border-b-2'>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <Link to="/"><img className='xl:w-28 xl:h-28 lg:w-28 lg:h-28 md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 pr-2' src={logo} alt="logo" /></Link>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Search" className="input input-bordered hidden lg:block md:block sm:block" />
                        </div>
                    </div>
                    <div className='navbar-end'>
                    <ManuDropdown></ManuDropdown>
                    </div>
                    {/* <div className="navbar-end">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:w-5 md:w-5 sm:w-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="lg:w-8 md:w-8 sm:w-6 w-6 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                    </div> */}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
