import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/img/bijou1.jpg'
import image2 from '../../assets/img/Bijou2.png'
import image3 from '../../assets/img/Bijou3.png'
import image4 from '../../assets/img/Bijou4.png'
const ImageSquareSlider = () => {
    const images = [image1, image2, image3, image4,image1, image2,image3, image4];
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7, // Nombre de diapositives visibles à la fois
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
          {
            breakpoint: 768, // Pour les écrans moyens
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480, // Pour les petits écrans
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      return (
        <div className="image-square-slider my-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="image-square" style={{ margin: '0 3px', }}> {/* Espacement léger */}
                <div 
                  className="image-container"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '150px',  
                    height: '150px',  
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>
      );
  };
  
  export default ImageSquareSlider;