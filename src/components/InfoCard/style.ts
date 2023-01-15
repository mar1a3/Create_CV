import styled from "styled-components";
import { Card } from 'antd';

export const CardWrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`
export const TitleSection = styled.p`
    margin-bottom:10px;
    font-size: clamp(15px,2vw,18px);
`
export const StyledCard = styled(Card)`
    position: relative;
    background-color: transparent;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1), 5px 0 10px rgba(0, 0, 0, 0.1);

&::before {
    content: '';
    position: absolute;
    top: -5px; 
    left: 0;
    width: 100%;
    height: 8px; 
    background-color:rgb(195, 31, 255);  
    border-top-left-radius: 5px; 
    border-top-right-radius: 5px;
}
`
