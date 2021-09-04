import React from "react";

const StarRatings = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i = i + 1) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return <>{stars}</>;
};

export default StarRatings;
