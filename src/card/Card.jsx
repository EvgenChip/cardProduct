import React, { startTransition } from "react";
import chair from "../asetse/chair.webp";
import floorLamp from "../asetse/floorLamp.jpg";
import golf from "../asetse/golf.jpg";
import basket from "../asetse/basket.svg";
import { useState } from "react";

import "./card.css";

const products = [
  {
    id: 1,
    img: chair,
    name: "Стул grey ",
    description: "Стильный стул премиум-класса",
    price: "14 500 р.",
  },
  {
    id: 2,
    img: floorLamp,
    name: "Торшер напольный Sitka ",
    description: "Торшер напольный с круглым плафоном Sitka Uttermost ",
    price: "37 500 р.",
  },
  {
    id: 3,
    img: golf,
    name: "Статуэтка декоративная ",
    description:
      "Металлические серебряные статуэтки 2 гольфиста Uttermost Practice Shot 19675",
    price: "25000 р.",
  },
];



export const Card = () => {
  const [order, setOrder] = useState([]);

  const addOrder = (product) => {
    setOrder([...order, product]);
  };

  let [basketOpen, setBasketOpen] = useState(false);

  let [formOpen, setFormOpen] = useState(false);
  console.log(formOpen);
  return (
    <div>
      <div className="container">
        <div className="wrapper_card">
          {products.map(({ id, img, name, description, price }) => {
            return (
              <div id={id} className="card">
                <img src={img} alt="" />
                <div className="card__content">
                  <div className="card__content_row">
                    <div className="content__details">
                      <h4>{name} </h4>
                      <p>{description}</p>
                    </div>
                    <div className="details_price">{price}</div>
                  </div>
                  <div className="content_buttons">
                    <button>Подробнее</button>
                    <button
                      onClick={() =>
                        addOrder({ id, img, name, description, price })
                      }>
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="basket__button">
            <div
              onClick={() => setBasketOpen((basketOpen = !basketOpen))}
              className={`basket__button_icon ${basketOpen && "active"}`}>
              <img src={basket} alt="" />
              <span>Корзина</span>
            </div>
            <div className="basket__button_item-count">{order.length}</div>
            {basketOpen && (
              <div className="basket__inner">
                {order.map(({ id, img, name, description, price }) => {
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
                })}
                <div className="content_buttons">
                  <button
                    onClick={() =>
                      setBasketOpen(
                        (basketOpen = !basketOpen),
                        setFormOpen((formOpen = true))
                      )
                    }>
                    Оформить
                  </button>
                  <button
                    onClick={() => setBasketOpen((basketOpen = !basketOpen))}>
                    Отмена
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
