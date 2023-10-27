import React, { useState } from "react";
import * as APIService from "../services/api.js";

function LoginForm() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  function updateField(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // async function sendForm(event) {
  //   event.preventDefault();

  //   try {
  //     const response = await APIService.login(
  //       formData.email,
  //       formData.password
  //     );

  //     // Stockage du token en localstorage
  //     localStorage.setItem("TOKEN", response.token);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // }
  
  async function sendForm(event) {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`${process.env?.REACT_APP_SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log('Reponse serveur', data)
    }
    catch (err) {
      setError(err.message);
    }
  }
  
  return (
    <>
      <form onSubmit={sendForm}>
        {<div style={{ color: "red" }}>{error}</div>}
        Email : <input type="text" name="email" onInput={updateField} />
        <br />
        Password :{" "}
        <input type="password" name="password" onInput={updateField} />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
