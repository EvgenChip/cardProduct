import React, { useState, useEffect, useCallback } from "react";

import { phoneIsValid, mailIsValid } from "../../../utils";
import { sendFormPost } from "../../../api/API";

export const useForm = (setOrders, setFormActive, setMetricActive, orders) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("Введите почту");
  const [phoneError, setPhoneError] = useState("Введите номер");
  const [formValid, setFormValid] = useState(false);

  const orderNames = orders.map(({ name }) => name).join(", ");

  useEffect(() => {
    emailError || phoneError ? setFormValid(false) : setFormValid(true);
  }, [emailError, phoneError]);

  const actionsAfterSend = useCallback(() => {
    setUserName("");
    setEmail("");
    setPhone("");
    setOrders([]);
    setEmailDirty(false);
    setPhoneDirty(false);
    setFormActive(false);
    setMetricActive(true);

    setTimeout(() => {
      setMetricActive(false);
    }, 3000);

    setFormValid(false);
    setEmailError("Введите почту");
    setPhoneError("Введите номер");
  }, [setFormActive, setMetricActive, setOrders]);

  const sendForm = useCallback(async () => {
    try {
      sendFormPost({
        phone,
        email,
        userName,
        orderNames,
      });

      actionsAfterSend();
    } catch (error) {
      console.log("Sending error", error);
    }
  }, [phone, email, userName, orderNames, actionsAfterSend]);

  const nameUserHandler = useCallback(({ target }) => {
    setUserName(target.value);
  }, []);

  const phoneHandler = useCallback(({ target }) => {
    setPhone(target.value);

    phoneIsValid(target.value)
      ? setPhoneError("")
      : setPhoneError("Некорректный телефон");
  }, []);

  const emailHandler = useCallback(({ target }) => {
    setEmail(target.value);

    mailIsValid(target.value)
      ? setEmailError("")
      : setEmailError("Некорректный емейл");
  }, []);

  const blurHandler = useCallback(
    ({ target }) => {
      const inputNameAction = {
        email: () => setEmailDirty(true),
        phone: () => setPhoneDirty(true),
      };

      inputNameAction[target.name]();
    },
    [setEmailDirty, setPhoneDirty]
  );

  return {
    userName,
    setUserName,
    email,
    setEmail,
    phone,
    setPhone,
    emailDirty,
    setEmailDirty,
    phoneDirty,
    setPhoneDirty,
    emailError,
    setEmailError,
    phoneError,
    setPhoneError,
    formValid,
    setFormValid,
    sendForm,
    nameUserHandler,
    phoneHandler,
    emailHandler,
    blurHandler,
    orderNames,
  };
};
