import styled from "styled-components";
import { Tag } from 'antd';

export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const StyledTag = styled(Tag)`
    padding: 5px 10px;
    font-size: clamp(12px, 2vw, 16px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
