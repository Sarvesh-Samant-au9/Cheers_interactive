import React from "react";
import styled from "styled-components";
import StarRatings from "../../Ratings/StarRating";
const MovieCard = ({
  data,
  data: { title, subtitle, description, production, ratings, baseUrl },
}) => {
  console.log(data);
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        src={baseUrl}
        style={{ display: "block", width: "100%", height: "200px" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <CardText className="card-title">{title}</CardText>
        <p className="card-text">{description}</p>
        <p>
          <StarRatings rating={ratings} />
        </p>
      </div>
    </div>
  );
};
const CardText = styled.h5`
  color: rebeccapurple;
  text-transform: capitalize;
`;

export default MovieCard;
