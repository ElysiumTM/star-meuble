import React, { useState, useEffect } from 'react';
import * as APIService from '../services/api.js'
import FurnitureForm from './FurnitureForm.jsx';
import styled from "styled-components";
import { Card } from 'antd';
import Header from './Header.jsx';

// import { Card } from "antd";

const FurnitureList = () => {
  const [furniture, setFurniture] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function getData() {
      try {
        const furniture = await APIService.getFurnitures()
        setFurniture(furniture.data.furnitures);
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
    <Header />
    <Container>
      <h1>Liste des Meubles</h1>
      <CardContainer>
        {furniture?.map((item, id) => (
          <Card key={id} title={item.name}
            bordered={false}
            style={{
              width: 300,
            }}>
            <p>Category: {item.category}</p>
            <p>Materials: {item.materials?.map((material, materialId) => (
              <span key={materialId}>{material.name}{materialId !== item.materials.length - 1 ? ', ' : ''}</span>
            ))}</p>
          </Card>
        ))}
      </CardContainer>
    </Container>
    </>
  );
};

export default FurnitureList;

const Container = styled.div`
  margin: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
`;