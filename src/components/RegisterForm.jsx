import React, { useState } from "react";
import * as APIService from "../services/api.js";
import { Form, Button, Input } from "antd";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const senForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       console.log("Connexion réussie !");
  //     } else {
  //       console.error("Échec de l'inscription.");
  //     }
  //   } catch (error) {
  //     console.error("Une erreur s'est produite lors de la connexion.");
  //   }
  // };

  async function sendForm(event) {
    event.preventDefault();

    try {
      const response = await APIService.register(
        formData.email,
        formData.password
      );

      localStorage.setItem("TOKEN", response.token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    // <form onSubmit={sendForm}>
    //   {<div style={{ color: "red" }}>{error}</div>}
    //   <input
    //     type="text"
    //     name="email"
    //     placeholder="Nom d'utilisateur"
    //     value={formData.email}
    //     onInput={handleInputChange}
    //     required
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Mot de passe"
    //     value={formData.password}
    //     onInput={handleInputChange}
    //     required
    //   />
    //   <button type="submit">S'inscrire</button>
    // </form>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onSubmit={sendForm}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input value={formData.email} onInput={handleInputChange}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password value={formData.password} onInput={handleInputChange}/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  );
}

export default RegisterForm;