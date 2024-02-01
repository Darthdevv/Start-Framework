import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="navbar fixed z-50 bg-[#000] text-[#eee]">
        <div className="navbar-start">
          <Link to={'/'} className="btn btn-ghost text-xl">
            {"start framework".toUpperCase()}
          </Link>
        </div>
        <div className="navbar-end  max-md:hidden">
          <Link to={'/about'} className="btn btn-ghost text-xl">{"about".toUpperCase()}</Link>
          <Link to={'/portfolio'} className="btn btn-ghost text-xl">{"portfolio".toUpperCase()}</Link>
          <Link to={'/contact'} className="btn btn-ghost text-xl">{"contact".toUpperCase()}</Link>
        </div>
        <div dir="rtl" className="navbar-start md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000] rounded-box w-52"
            >
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/portfolio'}>Portfolio</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
