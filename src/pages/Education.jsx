import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <>
    <div id="education" className="top"></div>
    <div >
      <div className="name">
          <FontAwesomeIcon icon={faGraduationCap} /> My Education
      </div>

      <div className="contai">
        <div className="box">
          <div className="contai-3">
            <input type="search" id="search" placeholder="Search..."></input>
          </div>
        </div>

        <div className="leftbox"></div>

        <div className="rightbox">
          <div className="rb-contai">
            <ul className="rb">
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">2014-2016</div>
                <div className="item-title">Chauatwitttayakan School</div>
                <p className="item-title">
                  High school : Science and Mathematics program{" "}
                </p>
              </li>

              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">2017-2021</div>
                <div className="item-title">Prince of Songkla University</div>
                <p className="item-title">
                  Bachelor's degree of Computer Engineering
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Education;
