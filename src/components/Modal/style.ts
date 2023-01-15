import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 50px;
`;
export const ResumeContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom:20px;
  padding: 10px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1), 5px 0 10px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -5px; 
    left: 0;
    width: 100%;
    height: 20px; 
    background-color:rgb(255, 20, 24); 
  }
  & div{
    font-size: clamp(10px, 2vw, 15px);
  }
    .personalInfo {
      display: flex;
      align-items:center;
      justify-content:space-between;
      padding:10px;
    }
    .avatarContainer{
      width: min(15vw, 150px);
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .rightSide{
      padding:10px;
      width:200px;
    }
    .name{
      font-size: clamp(15px,2vw,18px);
      font-weight:bold;
      color:rgb(255, 20, 24);
    }
    .contacts{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:0 10px;
    }
    .section-title{
      margin-bottom: 5px;
      font-size: clamp(15px,2vw,18px);
      font-weight:bold;
    }
    .education{
      padding: 10px;
    }
    .skills{
      padding: 10px;
    }
    & li{
      list-style-type: none;
    }
    .work-experience{
      padding: 10px;
    }
    .experience-position{
      font-weight:bold;
      color:rgb(255, 20, 24);
    }
    .experience-text{
      display: flex;
      justify-content: space-between;
      margin-top:5px;
      margin-bottom: 10px;
    }
`;
export const StyledDivider = styled.hr`
  border-top: 2px solid #ff4d4f;
`;



