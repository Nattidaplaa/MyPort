import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import p1 from "../pic/Project/4.png";
import p2 from "../pic/Project/5.png";
import p3 from "../pic/Project/8.png";

export default function Slid() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="picture" src={p1} alt="picture1"></img>
        <p className="contenttt">picture1: Select State</p>
      </div>
      <div>
        <img className="picture" src={p2} alt="picture2"></img>
        <p className="contenttt">picture2: Select LED ON/OFF</p>
      </div>
      <div>
        <img className="picture1" src={p3} alt="picture3"></img>
        <p className="contenttt">picture3: Show LED</p>
      </div>
    </Slider>
  );
}
