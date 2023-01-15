import React, { ReactNode } from 'react';
import { CardWrapper, TitleSection, StyledCard } from './style';

interface InfoCardProps {
    title?: ReactNode;
    children?: ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
    <>
        <CardWrapper>
            <TitleSection>{title}</TitleSection>
            <StyledCard>
                <div>{children}</div>
            </StyledCard>
        </CardWrapper>
    </>
);



