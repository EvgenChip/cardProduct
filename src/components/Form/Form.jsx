import React from "react";
import cn from "classnames";

import { useForm } from "./hooks/useForm";
import "./styles.css";

export const Form = ({
  active,
  setFormActive,
  orders,
  setMetricActive,
  setOrders,
}) => {
  const {
    userName,
    email,
    phone,
    emailDirty,
    phoneDirty,
    emailError,
    phoneError,
    formValid,
    sendForm,
    nameUserHandler,
    emailHandler,
    blurHandler,
    phoneHandler,
    orderNames,
  } = useForm(setOrders, setFormActive, setMetricActive, orders);

  return (
    <div className={cn("form__wrapper", { "form__wrapper--active": active })}>
      <div className="form">
        <form id="formOrder" className="form__body">
          <h1 className="form__title">Отправка данных</h1>
          <div className="form__item">
            <label htmlFor="formName" className="form__label">
              Имя
            </label>
            <input
              value={userName}
              onChange={nameUserHandler}
              id="formName"
              type="text"
              name="name"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <label htmlFor="formEmail" className="form__label">
              E-mail
            </label>
            {emailDirty && emailError && (
              <div className="emailError">{emailError}</div>
            )}
            <input
              value={email}
              onChange={emailHandler}
              onBlur={blurHandler}
              id="formEmail"
              type="text"
              name="email"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <label htmlFor="formTel" className="form__label">
              Ваш номер
            </label>
            {phoneDirty && phoneError && (
              <div className="emailError">{phoneError}</div>
            )}
            <input
              value={phone}
              onChange={phoneHandler}
              onBlur={blurHandler}
              id="formPhone"
              type="tel"
              name="phone"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <h2 className="form__title-order">Ваш товар</h2>
            <div className="form__order">
              <h4>{orderNames}</h4>
            </div>
          </div>
          <button
            disabled={!formValid}
            type="button"
            onClick={sendForm}
            className="form__button">
            Отправить
          </button>
          <button
            onClick={() => setFormActive(false)}
            type="button"
            className="form__button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
