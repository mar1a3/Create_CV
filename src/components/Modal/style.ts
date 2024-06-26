import styled from "styled-components";

export const Button = styled.button`
    position:absolute;
    top:-70px;
    left:500px;
    width:100px;
    height:50px;
`
export const ModalWrapper = styled.div`
    display: flex;
`
export const LeftPart = styled.div`
    padding: 30px 30px;
    width:300px;
    font-size:20px;
    font-weight:bold;
    background-color:ghostwhite;
    & div{
        margin-bottom:40px;
    }
    img{
        width:150px;
        height: 150px;
    }
    .insert{
        font-weight:lighter;
    }
`
export const RightPart = styled.div`
    display: flex;
    flex-direction:column;
    padding:20px 20px;
    font-size:20px;
    font-weight:bold;
    & div{
        margin-bottom:10px;
    }
    .bg{
        background-color:#e6f7f7;
    }
    .insert{
        font-weight:lighter;
    }
`