import React from "react";
import { SettingOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { HeaderContainer, TitleText, IconsContainer, IconButton } from "./style";

export const CustomHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleText>Create CV</TitleText>
      <IconsContainer>
        <IconButton>
          <UserOutlined />
        </IconButton>
        <IconButton>
          <SettingOutlined />
        </IconButton>
        <IconButton>
          <LogoutOutlined />
        </IconButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

