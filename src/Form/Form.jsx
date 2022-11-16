import React, { useState, useRef, useEffect } from "react";

import "./form.css";

export const Form = () => {
  const formRef = useRef(null);
  const postForms = (e) => {
    e.preventDefault();
    // const form = document.querySelectorAll("form"),
    const inputs = document.querySelectorAll("input");
    const message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся",
      failure: "Что-то пошло не так...",
    };

    const postData = async (url, data) => {
      console.log("test");
      //   document.querySelector().textContent = message.loading;
      let res = await fetch(url, {
        method: "POST",
        body: data,
      });

      console.log(res);

      return await res.json();
    };

    const formData = new FormData(formRef.current);

    // let statusMessage = document.createElement("div");
    // statusMessage.classList.add("status");
    // // formRef.appendChild(statusMessage);

    postData("https://jsonplaceholder.typicode.com/posts", formData)
      .then((res) => {
        console.log(res);
        // statusMessage.textContent = message.success;
      })
      .catch((e) => {
        console.log(e);
        // statusMessage.textContent = message.failure;
      });
    //   .finally(() => {
    //     clearInputs();
    //     setTimeout(() => {
    //       //   statusMessage.remove();
    //     }, 5000);
    //   });



  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("Введите почту");
  const [phoneError, setPhoneError] = useState("Введите номер");
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, phoneError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
    } else {
      setEmailError("");
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError("Некорректный телефон");
    } else {
      setPhoneError("");
    }
  };
  console.log(phone);
  console.log(email);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <form
          method="POST"
          action="../mail.php"
          id="formOrder"
          className="form__body"
          ref={formRef}>
          <h1 className="form__title">Отправка данных</h1>
          <div className="form__item">
            <label htmlFor="formName" className="form__label">
              Имя
            </label>

            <input id="formName" type="text" name="name" class="form__input" />
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
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              id="formEmail"
              type="text"
              name="email"
              class="form__input"
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
              class="form__input"
            />
          </div>
          <div className="form__item">
            <h2 className="form__title-order">Ваш товар</h2>
            <div className="form__order">{"order.name"}</div>
          </div>
          <button
            disabled={!formValid}

            type="submit"
            className="form__button">
            Отправить
          </button>
          <button type="cancel" className="form__button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
