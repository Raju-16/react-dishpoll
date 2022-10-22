import React from "react";

const DishCard = ({ dish }) => {
  return (
    <div className="dishCardDiv">
      <img src={dish.image} alt="Dish" />
      <div id="textDiv">
        <p className="firstPara">{dish.dishName}</p>
        <p className="secondPara">{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
