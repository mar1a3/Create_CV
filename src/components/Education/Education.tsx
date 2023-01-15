import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select'
import { DatePicker } from 'antd';

import { setInstitution, setGraduate, setDegree } from '../../slices/educationSlice';
import { RootState } from '../../store';


export const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector((state: RootState) => state.education);

    const handleInstituteChange = (e: ChangeEvent<HTMLInputElement>) => {
        const institute = e.target.value;
        dispatch(setInstitution(institute))

    }
    const handleChangeGraduate = (date: string) => {
        const formattedDate = dayjs(date);
        dispatch(setGraduate(formattedDate));
    }
    const handleChangeDegree = (value: string) => {
        dispatch(setDegree(value));
    }

    return (
        <InfoCard title="Education">
            <FormControl label="Institution">
                <Input
                    placeholder="Institution"
                    value={education.institution}
                    onChange={handleInstituteChange}
                />
            </FormControl>
            <FormControl label="Date of graduation">
                <DatePicker
                    onChange={handleChangeGraduate}
                    placeholder='Date of graduation'
                />
            </FormControl>
            <Select
                defaultValue="Bachelor "
                title="Degree"
                options={[
                    { value: 'Bachelor', label: 'Bachelor' },
                    { value: 'Master', label: 'Master' }
                ]}
                onChange={handleChangeDegree}
                value={education}
            />
        </InfoCard>
    )
}