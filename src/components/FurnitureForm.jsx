import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select } from "antd";


function FurnitureForm() {
  const [form] = Form.useForm();

  const [materials, setMaterials] = useState([])

  useEffect(() => {
    async function fetchMaterials() {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/materials`)
        const data = await res.json()
        setMaterials(data)
      }
      catch(err) {
        console.log('Erreur récupération materials', err.message)
      }
    }
    fetchMaterials()
  }, [])

  const sendForm = async (values) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log('Reponse serveur', data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
    form={form}
    name="basic"
    labelCol={{
      span: 10,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={sendForm}
  >
    <Form.Item
      label="Nom du meuble"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input the name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Catégorie"
      name="category"
      rules={[
        {
          required: true,
          message: 'Please input the category!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Matériaux"
      name="materials"
      rules={[
        {
          required: true,
          message: 'Please input the material!',
        },
      ]}
    >
      {materials.length > 0 && 
        <Select mode="multiple" options={materials.map(mat => ({ value: mat._id, label: mat.name }) )}/>
      }
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 10,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Créer
      </Button>
    </Form.Item>
  </Form>
  );
}

export default FurnitureForm;
