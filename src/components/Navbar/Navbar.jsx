import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (

   <div className="my-[50px]">
        <div className="navbar p-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                    </svg>
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                            isActive
                                ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                                : "font-semibold text-lg text-black"
                            }
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/listed"
                            className={({ isActive }) =>
                            isActive
                                ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                                : "font-semibold text-lg text-black"
                            }
                        >Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pages"
                            className={({ isActive }) =>
                            isActive
                                ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                                : "font-semibold text-lg text-black"
                            }
                        >Pages to Read
                        </NavLink>
                    </li>
                </ul>
                </div>
                <Link
                to="/"
                aria-label="Back to homepage"
                className="flex items-center text-xl md:text-3xl font-bold"
                >Book Vibe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-4">
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                        ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                        : "font-semibold text-lg text-black"
                    }
                    >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/listed"
                    className={({ isActive }) =>
                        isActive
                        ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                        : "font-semibold text-lg text-black"
                    }
                    >Listed Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                        isActive
                        ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                        : "font-semibold text-lg text-black"
                    }
                    >Pages to Read
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                        isActive
                        ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                        : "font-semibold text-lg text-black"
                    }
                    >FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                        ? "text-lg font-bold py-3 px-5 rounded-lg border-2 border-green-500 text-green-500"
                        : "font-semibold text-lg text-black"
                    }
                    >Contact
                    </NavLink>
                </li>
                </ul>
            </div>

            <div className="navbar-end gap-x-4 hidden md:flex">
                <button className="px-7 py-4 text-lg  text-white font-semibold bg-[#23BE0A] rounded-lg">
                Sign In
                </button>
                <button className=" px-7 py-4 text-lg  text-white font-semibold bg-[#59C6D2] rounded-lg">
                Sign Up
                </button>
            </div>
            </div>

   </div>
  );
};

export default Navbar;