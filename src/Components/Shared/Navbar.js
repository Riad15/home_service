import React from 'react';
import logo from '../../assets/images/home-service-icon.jpg'
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import evator from "../../assets/images/evator_img.jpg"

const Navbar = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    return (
        <div>
            <header className="text-gray-600 body-font top-0 z-50">
                <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='flex title-font items-center mb-4 md:mb-0 w-16' src={logo} alt="" />
                        <span className="ml-3 text-sky-600  text-2xl">Home Service</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/"><a className="mr-5 px-2 rounded-md  cursor-pointer hover:bg-sky-400 hover:text-white">Home</a></Link>
                        <Link to="/services"> <a className="mr-5 px-2 rounded-md  cursor-pointer hover:bg-sky-400 hover:text-white">Services</a></Link>
                        <Link to="/about"> <a className="mr-5 px-2 rounded-md  cursor-pointer hover:bg-sky-400 hover:text-white">about us</a></Link>
                    </nav>
                    <Link to="/workRegistry">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-sky-400 hover:text-white rounded text-base mt-4 md:mt-0">Work With Us
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>

                    <div class="ml-5 dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {
                                    user ? user.photoURL ? <img src={user.photoURL} /> : <img src={evator} /> : <img src={evator} />
                                }
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {
                                user ?
                                    <li><a onClick={() => signOut(auth)}>Logout</a></li> :
                                    <Link to="/login"><li><a>LogIn</a></li></Link>
                            }
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;