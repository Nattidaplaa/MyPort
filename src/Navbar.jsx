/* import { useMatch, useResolvedPath } from "react-router-dom"; */
import pic from "./pic/icon-1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link activeClass="active" smooth spy to="home" className="site-title">
        <img className="logo" src={pic} alt="NATTIDA"></img>
      </Link>
      <ul>
        <li className="right">
          <Link activeClass="active" smooth spy to="profile">
            Profile
          </Link>
        </li>
        <li className="right">
          <Link activeClass="active" smooth spy to="education">
            Education
          </Link>
        </li>
        <li className="right">
          <Link activeClass="active" smooth spy to="experience">
            Experience
          </Link>
        </li>
        <li className="right">
          <Link activeClass="active" smooth spy to="skills">
            Skills
          </Link>
        </li>
        <li className="right">
          <Link activeClass="active" smooth spy to="contact">
            Contact
          </Link>
        </li>

        {/*         <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/education">Education</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink> */}
      </ul>
    </nav>
  );
};

/* function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
} */

export default Navbar;
