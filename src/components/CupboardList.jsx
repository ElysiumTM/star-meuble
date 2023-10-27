import React, { useState, useEffect } from 'react';
import * as APIService from '../services/api.js';
import styled from "styled-components";
import { Card } from 'antd';
import Header from './Header.jsx';

const CupboardList = () => {
  const [furniture, setFurniture] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const furnitureData = await APIService.getFurnitures();
        setFurniture(furnitureData.data.furnitures);
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  const cupboardFurniture = furniture.filter(item => item.category === "Armoire");

  return (
    <>
    <Header />
    <Container>
          <h1>Liste des Armoires</h1>
          <CardContainer>
              {cupboardFurniture.map((item, id) => (
                  <Card key={id} title={item.name}
                      bordered={false}
                      style={{
                          width: 300,
                      }}
                  >
                      <p>Category: {item.category}</p>
                  </Card>
              ))}
          </CardContainer>
      </Container>
      </>
  );
};

export default CupboardList;

const Container = styled.div`
  margin: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
`;
