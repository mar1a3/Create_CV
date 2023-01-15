import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';



export const Button: React.FC<ButtonProps> = ({ onClick }) => (
    <AntdButton onClick={onClick}>Add more</AntdButton>

);
