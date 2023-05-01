import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-white text-black">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl font-bold">
          Ashlih syahrul ghifari
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/portofolio"}>Portofolio</Link>
          </li>
          <li>
            <Link to={"/about-me"}>About-Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
