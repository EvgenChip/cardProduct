import React from "react";

import "../styles.css";

export const Card = ({ product, addOrder }) => {
  const { id, img, name, description, price } = product;

  return (
    <div id={id} className="card">
      <img src={img} alt="" />
      <div className="card__content">
        <div className="card__content_row">
          <div className="content__details">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="details_price">{price}</div>
        </div>
        <div className="content_buttons">
          <button>Подробнее</button>
          <button
            onClick={() => addOrder({ id, img, name, description, price })}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
