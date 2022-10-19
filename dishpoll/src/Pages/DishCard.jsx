import React from "react";

const DishCard = ({ dish }) => {
  // console.log("dish", dish); 
  return (
    <div>
      <img src={dish.image} alt="Dish Image" />
      <p>{dish.dishName}</p>
      <p>{dish.description}</p>
    </div>
  );
};

export default DishCard;
