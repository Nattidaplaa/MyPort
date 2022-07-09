import profile from "../pic/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div>
      <div className="name">
        {" "}
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </div>
      <div className="card">
        <img className="logoprofile" src={profile} alt="NATTIDA"></img>
        <h2 className="nattida"> ... Nattida Chairat ...</h2>
        <div className="message">
          <p>
            I graduated with a bachelor's degree of Computer Engineering, Prince
            of Songkla University phuket campus.I have the ability to design
            websites, create applications and ready to learning new things all
            the time. I intend to be a programmer because I want to work in the
            field of web writing and with the hope that I will work directly
            with the field I studied.
          </p>
        </div>
      </div>
    </div>
  );
};

/* const Profile = () => {
  return (
    <div className="profile">
      <h1 className="name">Proflie</h1>
      <div>
        <img className="logoprofile" src={profile} alt="NATTIDA"></img>
      </div>
      <div className="message">
        <p>
          I graduated with a bachelor's degree of Computer Engineering,PSU
          phuket campus.I have the ability to design websites, create
          applications and ready to learning new things all the time. I intend
          to be a programmer because I want to work in the field of web writing
          and with the hope that I will work directly with the field I studied.
        </p>
      </div>
    </div>
  );
}; */

export default Profile;
