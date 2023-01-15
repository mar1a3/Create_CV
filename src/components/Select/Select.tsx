import React from 'react';
import { Select as AntdSelect, Space, SelectProps } from 'antd';
import { SelectWraper } from './style';

export const Select: React.FC<SelectProps<any>> = ({ mode, options, title, defaultValue, placeholder, onChange }) => {

  const handleSelectChange = (value: any, option: any) => {
    if (onChange) {
      onChange(value, option);
    }
  }

  return (
    <SelectWraper>
      <p>{title}</p>
      <Space wrap>
        <AntdSelect
          mode={mode}
          style={{ minWidth: '250px' }}
          defaultValue={defaultValue}
          options={options}
          placeholder={placeholder}
          onChange={handleSelectChange}
        />
      </Space>

    </SelectWraper>
  );
};

