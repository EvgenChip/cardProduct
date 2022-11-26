import { useState } from "react";

export const useCards = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders([...orders, product]);
  };

  const [basketOpen, setBasketOpen] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [metricActive, setMetricActive] = useState(false);

  return {
    orders,
    setOrders,
    addOrder,
    basketOpen,
    setBasketOpen,
    formActive,
    setFormActive,
    metricActive,
    setMetricActive,
  };
};
