import styled from "styled-components";
import { Layout } from "antd";

export const HeaderContainer = styled(Layout.Header)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: white;
  color:rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

export const TitleText = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconButton = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f1f1f1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
