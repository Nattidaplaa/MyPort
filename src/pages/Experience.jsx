import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
/* import p4 from "../pic/Project/4.png";
import p5 from "../pic/Project/5.png";
import p8 from "../pic/Project/8.png";
 */
const Experience = () => {
  return (
    <div className="experience">
      <div className="name">
          <FontAwesomeIcon icon={faGear} /> Experience
      </div>

      <div className="boxx">
        <div>
          <p className="project1">
            Project : Smart home lighting design by gesture sensor
          </p>
        </div>
        <div>
          <p className="content-pro1">
            This project is Smart home lighting design by technology of sensors
            Gesture-Recognition.Developed in conjunction with basic control
            systems, smart home automation systems.Uses the esp32 series of
            microcontrollers in conjunction with the RGB and Gesture Sensors
            (APDS-9960).Develop touse the electric control devices with virtue
            of turning on-off and prohibiting lights or control devices,
            electric control devices.
          </p>
        </div>
        
        <div>
          <a className="button" href="#popup1">
            See more
          </a>
        </div>
        <div id="popup1" className="overlay">
          <div className="popup"> <h2>picture</h2>
          <a className="close" href="#close" >
            &times;
          </a>
          <div className="contenttt">picture1</div>
        </div>
        </div>
      </div>

      <div className="boxx">
        <p className="project1">Mini Project with Blackpink story </p>

        <div>
          <a className="button" href="#popup1">
            See more
          </a>
        </div>
        <div id="popup1" className="overlay">
          <div className="popup"> <h2>picture</h2>
          <a className="close" href="#close" >
            &times;
          </a>
          <div className="contenttt">picture1</div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
