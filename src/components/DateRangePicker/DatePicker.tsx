import React from 'react';
import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd';
import { RangePickerWrapper } from './style';

const { RangePicker } = AntdDatePicker;

export const DateRangePicker: React.FC<DatePickerProps> = ({}) => (
        <RangePickerWrapper>
        <RangePicker />
        </RangePickerWrapper>
);

