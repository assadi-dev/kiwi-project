import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const [registerData, setRegisterData] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".confirm-password.error"
    );
    const termsError = document.querySelector(".terms.error");

    pseudoError.textContent = null;
    emailError.textContent = null;
    passwordError.textContent = null;
    passwordConfirmError.textContent = null;
    termsError.textContent = null;

    if (
      registerData.password !== registerData.confirm_password ||
      !terms.checked
    ) {
      if (registerData.password !== registerData.confirm_password)
        passwordConfirmError.textContent =
          "Les mots de passe ne correspondent pas";
      if (!terms.checked)
        termsError.textContent = "Veuillez valider les conditions générales.";
    } else {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/user/register`,
        data: {
          pseudo: registerData.pseudo,
          email: registerData.email,
          password: registerData.password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            pseudoError.textContent = res.data.errors.pseudo;
            emailError.textContent = res.data.errors.email;
            passwordError.textContent = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm /> <span></span>
          <h4 className="success">
            Enregistrement Réussi, veuillez vous connecter
          </h4>{" "}
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={handleChangeData}
            value={registerData.pseudo}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChangeData}
            value={registerData.email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChangeData}
            value={registerData.password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="confirm-password">Confirmer mot de passen</label>
          <br />
          <input
            type="password"
            name="confirm_password"
            id="confirm-password"
            onChange={handleChangeData}
            value={registerData.confirm_password}
          />
          <div className="confirm-password error"></div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <br />
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider l'inscription" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
