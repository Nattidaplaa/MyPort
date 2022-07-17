import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelopeSquare,
  faLocationDot,
  faPersonPraying,
  faUserCircle,
  faGraduationCap,
  faGears,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="con1">
        <div>
          <div className="text">
            <h3>Plaa's</h3>
            <p>
              <FontAwesomeIcon icon={faPersonPraying} /> Thanks for visiting us.
            </p>
          </div>
        </div>

        <div className="con2">
          <h3>Contact Information</h3>
          <li>
            <FontAwesomeIcon icon={faPhone} /> 061-2568358
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelopeSquare} /> plaa177@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} /> Phuket Thailand
          </li>
          <li>
            <FontAwesomeIcon icon={faLine} /> ID : plaa..
          </li>
        </div>

        <div className="con3">
          <h3>Overview</h3>
          <li>
            <Link activeClass="active" smooth spy to="profile">
              <FontAwesomeIcon icon={faUserCircle} /> Profile
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="education">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="experience">
              <FontAwesomeIcon icon={faGears} /> Experience
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="skills">
              <FontAwesomeIcon icon={faListCheck} /> Skills
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
