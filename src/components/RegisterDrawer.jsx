import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

function RegisterDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <ButtonStyled type="primary" icon={<UserOutlined />} onClick={showDrawer}>
        Register
      </ButtonStyled>
      <Drawer
        title="Register"
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        open={isDrawerVisible}
        width={500}
      >
        <IconContainer>
          <UserOutlinedStyled />
          <Title>Register</Title>
        </IconContainer>

        <DrawerContent>
          <RegisterForm />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default RegisterDrawer;

const ButtonStyled = styled(Button)`
  font-size: 16px;
  background: none;
  margin: 0 30px;
  color: white;
  border: none;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const UserOutlinedStyled = styled(UserOutlined)`
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