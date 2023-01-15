import styled from "styled-components";

export const ParagraphWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom:30px;
    font-size:20px;
    border-bottom: 1px solid grey;
    & .delete-icon{
        cursor: pointer;
    }

`