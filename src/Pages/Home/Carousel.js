import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'
import image1 from '../assets/bgfirst.webp';
import image2 from '../assets/bg2.jpg'
import image3 from '../assets/bg1.jpeg'

const Carousel=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = [
        image1,image2,image3
      ]

    return(
        <div >

        <Slider {...settings}>
            {/* <img src={image1} /> */}
          {images.map((element,index)=>{
              return(
                  
                  <div key={index} className="carousel">
                <img className="carouselimg" src={element} alt="Failed To Load " />
            </div>
                )
            })}
        </Slider>
            </div>

        
    )
};

export default Carousel;