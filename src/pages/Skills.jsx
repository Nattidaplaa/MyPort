import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import c from "../pic/c-icon.png";
import cc from "../pic/c.svg";
import sql from "../pic/sql.png";
import weka from "../pic/weka.png";

const Skills = () => {
  return (
      <div className="all">
        <div className="name">
          <FontAwesomeIcon icon={faListCheck} /> {""}
          Skills
        </div>

      <div>
        <FontAwesomeIcon icon={faReact} className="iconskill" />
        <FontAwesomeIcon icon={faCss3Alt} className="iconskill" />
        <FontAwesomeIcon icon={faHtml5} className="iconskill" />
        <FontAwesomeIcon icon={faJsSquare} className="iconskill" />
        <img className="iconskill" src={sql} alt="SQL"></img>
        <FontAwesomeIcon icon={faNode} className="iconskill" />

        <p>
          <img className="iconskill" src={c} alt="C"></img>
          <img className="iconskill" src={cc} alt="C++"></img>
          <img className="iconskill" src={weka} alt="Weka"></img>
        </p>
      </div>

      <div>
        <h3 className="Software">Software</h3>
        <li className="soft">Weka  </li>
        <li className="soft">Photoshop </li>
        <li className="soft">Microsoft office</li>
      </div>
    </div>
  );
};

export default Skills;
