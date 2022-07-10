import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Slid from "../slid/Slid";
import SildMini from "../slid/SlidMini";

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
            See picture...
          </a>
        </div>
        <div id="popup1" className="overlay">
          <div className="popup">
            {" "}
            <h2>picture</h2>
            <a className="close" href="#close">
              &times;
            </a>
            <p>
              <Slid />
            </p>
            <li className="soft">Software : C++ , Arduino IDE</li>
            <li className="soft">Hardware : ESP 32, Arduino, APDS-9960</li>
          </div>
        </div>
      </div>

      <div className="boxx">
        <div>
          <p className="project1">Mini Project with Blackpink story </p>
        </div>
        <div>
          <p className="content-pro1">
            This mini Project with Blackpink story. Content about members of
            Blackpink.Personal profile of each member and music vedio of
            Blackpink.
          </p>
        </div>

        <div>
          <a className="button" href="#popup2">
            See picture...
          </a>
        </div>
        <div id="popup2" className="overlay">
          <div className="popup">
            {" "}
            <h2>picture</h2>
            <a className="close" href="#close">
              &times;
            </a>
            <p>
              <SildMini />
            </p>
            <li className="softt">Language : Javascript, HTML</li>
            <li className="softt">frameworks : React</li>
            <li className="softt">Database : Firebase</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
