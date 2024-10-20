import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const reviews = [
  {
    firstName: "John",
    lastName: "Doe",
    rating: 4.5,
    description: "Great service! Highly recommended."
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    rating: 5,
    description: "Amazing experience, will definitely come back."
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    rating: 4,
    description: "Good service, but there's room for improvement."
  },
  {
    firstName: "Bob",
    lastName: "Williams",
    rating: 3.5,
    description: "Decent experience, but it could be better."
  },
  // Ajoute plus d'avis si nécessaire
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-warning" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning" />);
    }
  }
  return stars;
};

const CustomerReviews = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#F1C719', color: '#000', padding: '40px 0' }}>
      <Container>
        <h2 className="text-center text-white mb-4">Avis clients</h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-3">
              <div className="review-card p-4 bg-light" style={{ borderRadius: '8px' }}>
                <h5>{review.firstName} {review.lastName}</h5>
                <div className="mb-2">
                  {renderStars(review.rating)}
                </div>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CustomerReviews;
