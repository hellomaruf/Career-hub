import { NavLink } from "react-router-dom";

function Nav() {
  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 mx-3 font-semibold"
            : "text-gray-900 mx-3 font-semibold"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 mx-3 font-semibold"
            : "text-gray-900 mx-3 font-semibold"
        }
        to={"/statistics"}
      >
        Statistics
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 mx-3 font-semibold"
            : "text-gray-900 mx-3 font-semibold"
        }
        to={"/applied"}
      >
        Applied Jobs
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 mx-3 font-semibold"
            : "text-gray-900 mx-3 font-semibold"
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar bg-base-100 max-w-7xl h-24 mx-auto py-6 ">
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
              {link}
            </ul>
          </div>
          <a className="text-2xl font-bold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-blue-400 to-purple-400 text-white">
            Star Applying
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
