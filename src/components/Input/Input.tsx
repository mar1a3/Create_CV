import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';
import { Wrapper } from './style';


export const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
    return (
        <>
            <Wrapper>
                <AntdInput value={value} onChange={onChange} maxLength={25} placeholder={placeholder} />
            </Wrapper>
        </>
    )
}


