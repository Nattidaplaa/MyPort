import { Link, useMatch, useResolvedPath } from "react-router-dom"
import pic from "./pic/icon-1.png"
 
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img className="logo" src={pic} alt= "NATTIDA" ></img>
      </Link>
      <ul>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/education">Education</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
const resolvedPath=  useResolvedPath(to);
const isActive = useMatch( {path: resolvedPath.pathname, end: true});

  return (
    <>
      <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}

export default Navbar;
