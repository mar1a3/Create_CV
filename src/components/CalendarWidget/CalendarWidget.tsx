import React from 'react';
import { DatePicker, DatePickerProps } from 'antd';
import { CalendarWrapper } from './style';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export const CalendarWidget: React.FC<DatePickerProps> = ({ title }) => (
    <>
        <CalendarWrapper>
            <p>{title}</p>
            <DatePicker
                style={{ background: 'transparent' }}
                onChange={onChange}
                placeholder={title}
            />
        </CalendarWrapper>
    </>
);