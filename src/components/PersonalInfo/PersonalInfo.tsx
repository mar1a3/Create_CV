import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { FileUploader } from '../FileUploader/FileUploader';

import { setPersInfo, setJobTitle, setLocation, setPhone, setBirthday, setPhoto } from '../../slices/personalInfoSlice';
import { RootState } from '../../store';

export const PersonalInfo = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state: RootState) => state.personalInfo);

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fullname = e.target.value;
        dispatch(setPersInfo(fullname))
    }
    const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const jobtitle = e.target.value;
        dispatch(setJobTitle(jobtitle))
    }
    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        dispatch(setLocation(location))
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        dispatch(setPhone(phone))
    }

    const handleChangeBirthday = (date: string) => {
        const formattedDate = dayjs(date);
        dispatch(setBirthday(formattedDate));
    }
    const handleChangeAvatar = (img: string) => {
        dispatch(setPhoto(img));
    };

    return (
        <>
            <InfoCard title="Personal information">
                <FormControl label="Full name" >
                    <Input
                        value={personalInfo.fullname}
                        placeholder="Full name"
                        onChange={handleFullNameChange}
                    />
                </FormControl>
                <FormControl label="Job title" >
                    <Input
                        value={personalInfo.jobtitle}
                        placeholder="Job title"
                        onChange={handleJobTitleChange}
                    />
                </FormControl>
                <FormControl label="Place of residence">
                    <Input
                        value={personalInfo.location}
                        placeholder="Place of residence"
                        onChange={handleLocationChange}
                    />
                </FormControl>
                <FormControl label="Phone number">
                    <Input
                        value={personalInfo.phone}
                        placeholder="Phone number"
                        onChange={handlePhoneChange}
                    />
                </FormControl>
                <FormControl label="Date of birth">
                    <DatePicker
                        onChange={handleChangeBirthday}
                        placeholder='Date of birth'
                    />
                </FormControl>
                <FileUploader
                    onChange={handleChangeAvatar}
                />
            </InfoCard>
        </>
    );
};

