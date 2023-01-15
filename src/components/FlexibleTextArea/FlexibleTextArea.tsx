import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';

const { TextArea } = AntdInput;

type FlexibleTextAreaProps = InputProps & {
    value?: string | number;
    onChange?: (value: string | number) => void;
}

export const FlexibleTextArea: React.FC<FlexibleTextAreaProps> = ({ value, onChange }) => {
    return (
        <>
            <TextArea value={value?.toString()} onChange={(e) => onChange?.(e.target.value)} rows={4} style={{ width: '950px' }} />
        </>
    );
}