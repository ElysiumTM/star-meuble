import { Button, Drawer } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import FurnitureForm from "./FurnitureForm";
import { PlusOutlined } from "@ant-design/icons";


function CreateFurniturDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <ButtonStyled icon={<PlusOutlined />} onClick={showDrawer}>
        Create a furniture
      </ButtonStyled>
      <Drawer
        title="Create a furniture"
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        open={isDrawerVisible}
        width={500}
      >
        <IconContainer>
          <PlusOutlinedStyled />
          <Title>Create a furniture</Title>
        </IconContainer>

        <DrawerContent>
          <FurnitureForm />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateFurniturDrawer;

const ButtonStyled = styled(Button)`
  font-size: 16px;
  background: none;
  margin: 0 30px;
  color: white;
  border: none;
  box-shadow: none;

  &:hover {
    background-color: #424340;
    color: white;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PlusOutlinedStyled = styled(PlusOutlined)`
  font-size: 28px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;