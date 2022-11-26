import React, { useCallback } from "react";
import cn from "classnames";

import { Form } from "../../components/Form/Form";
import { MetricPage } from "../../components/MetricPage/MetricPage";
import { Card } from "./components/Card";
import { Order } from "./components/Order";
import { PRODUCTS } from "../../constants";
import { useCards } from "./hooks/useCards";
import basket from "../../assets/basket.svg";
import "./styles.css";

export const Cards = () => {
  const {
    orders,
    setOrders,
    addOrder,
    basketOpen,
    setBasketOpen,
    formActive,
    setFormActive,
    metricActive,
    setMetricActive,
  } = useCards();

  const displayProducts = useCallback(
    (product) => (
      <Card key={product.id} product={product} addOrder={addOrder} />
    ),
    [addOrder]
  );

  const displayOrders = useCallback(
    (order) => <Order key={order.id} order={order} />,
    []
  );

  const toggleBasket = useCallback(() => {
    orders.length && setBasketOpen(!basketOpen);
  }, [orders, basketOpen, setBasketOpen]);

  const openForm = useCallback(() => {
    setBasketOpen(false);
    setFormActive(true);
  }, [setBasketOpen, setFormActive]);

  return (
    <div>
      <div className="container">
        <div className="wrapper_card">
          {PRODUCTS.map(displayProducts)}
          <div className="basket__button">
            <div
              onClick={toggleBasket}
              className={cn("basket__button_icon", { active: basketOpen })}>
              <img src={basket} alt="" />
              <span>Корзина</span>
            </div>
            <div className="basket__button_item-count">{orders.length}</div>
            {basketOpen && (
              <div className="basket__inner">
                {orders.map(displayOrders)}
                <div className="content_buttons">
                  <button onClick={openForm}>Оформить</button>
                  <button onClick={toggleBasket}>Отмена</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Form
        active={formActive}
        setFormActive={setFormActive}
        orders={orders}
        setMetricActive={setMetricActive}
        setOrders={setOrders}
      />
      <MetricPage metricActive={metricActive} />
    </div>
  );
};
