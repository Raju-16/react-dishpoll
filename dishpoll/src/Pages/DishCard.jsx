import React from "react";

const DishCard = ({ dish }) => {
  return (
    <div>
      <img src={dish.image} alt="Dish" />
      <p>{dish.dishName}</p>
      <p>{dish.description}</p>
    </div>
  );
};

export default DishCard;
