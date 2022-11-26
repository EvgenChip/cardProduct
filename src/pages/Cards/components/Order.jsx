import React from "react";

export const Order = ({ order }) => {
  const { id, img, name, description, price } = order;

  return (
    <div id={id} className="basket__order">
      <img src={img} alt="" />
      <div className="order__content">
        <div className="order__content_row">
          <div className="content__details">
            <span>{name} </span>
            <p>{description}</p>
          </div>
          <div className="details_price">{price}</div>
        </div>
      </div>
    </div>
  );
};
