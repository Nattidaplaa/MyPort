import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pp1 from "../pic/miniProject/1.PNG";
import pp2 from "../pic/miniProject/2.PNG";
import pp3 from "../pic/miniProject/3.PNG";
import pp4 from "../pic/miniProject/4.PNG";
import pp5 from "../pic/miniProject/5.PNG";
import pp6 from "../pic/miniProject/6.PNG";
import pp7 from "../pic/miniProject/7.PNG";

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
        <img className="picture2" src={pp1} alt="picture1"></img>
      </div>
      <div>
        <img className="picture2" src={pp2} alt="picture2"></img>
      </div>
      <div>
        <img className="picture2" src={pp3} alt="picture3"></img>
      </div>
      <div>
        <img className="picture2" src={pp4} alt="picture4"></img>
      </div>
      <div>
        <img className="picture2" src={pp5} alt="picture5"></img>
      </div>
      <div>
        <img className="picture2" src={pp6} alt="picture6"></img>
      </div>
      <div>
        <img className="picture2" src={pp7} alt="picture7"></img>
      </div>
    </Slider>
  );
}
