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

const Contact = () => {
  return (
    <div className="contact">
      <div className="con1">
        <div className="con2">
          <div className="text">
            <h3>Plaa's</h3>
            <p>
              <FontAwesomeIcon icon={faPersonPraying} /> Thanks for visiting us.
            </p>
          </div>
        </div>

        <div className="con2">
          <h3>Contact Information</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 061-2568358
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelopeSquare} /> plaa177@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Phuket Thailand
          </p>
          <p>
            <FontAwesomeIcon icon={faLine} /> ID : plaa..
          </p>
        </div>

        <div className="con2">
          <h3>Overview</h3>
          <p>
            <FontAwesomeIcon icon={faUserCircle} /> Profile
          </p>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </p>
          <p>
            <FontAwesomeIcon icon={faGears} /> Experience
          </p>
          <p>
            <FontAwesomeIcon icon={faListCheck} /> Skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
