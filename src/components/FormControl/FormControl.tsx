import React from 'react';
import { Wrapper } from './style';

interface FormControlProps {
    label: string;
    children: React.ReactNode;
}

export const FormControl: React.FC<FormControlProps> = ({ label, children }) => {
    return (
        <>
            <Wrapper>
                <label>{label}</label>
                {children}
            </Wrapper>
        </>
    )
}
