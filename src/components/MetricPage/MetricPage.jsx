import React from "react";
import cn from "classnames";
import { sendMetric } from "./metric";
import "./styles.css";

export const MetricPage = ({ metricActive }) => {
  sendMetric("reachGoal", "Спасибо за заказ");
  return (
    <div className={cn("metricPage", { "metricPage--active": metricActive })}>
      <div className="metricPage__content">
        <h4>Спасибо за заказ</h4>
      </div>
    </div>
  );
};
