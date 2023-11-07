import { Link } from "react-router-dom";
import avatarImg from "../../../assets/images/avatar.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="courses">Courses</Link>
      </li>
      <li>
        <Link to="admission">Admission</Link>
      </li>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-opacity-25 bg-base-300 max-w-screen-xl shadow-2xl z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-[#AC46F7]">
            Smart <span className="text-yellow-500">Academy</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn bg-[#3420b4] text-white"
              >
                Log Out
              </button>
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-[#3420b4] text-white mr-1">
                Login
              </Link>
              <div className="w-10 rounded-full">
                <img src={avatarImg} alt="Default Avatar" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
