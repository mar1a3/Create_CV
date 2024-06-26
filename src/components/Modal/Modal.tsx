import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { Modal as AntModal, ModalProps } from 'antd';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { RootState } from '../../store';

import { Button, ModalWrapper, LeftPart, RightPart } from './style';

export const Modal: React.FC<ModalProps> = ({ open, onCancel }) => {

    const componentRef = useRef(null);

    const { fullname, location, phone, birthday, photo } = useSelector(
        (state: RootState) => state.personalInfo);

    const { skills } = useSelector(
        (state: RootState) => state.skills);

    const { institution, graduateDate, degree } = useSelector(
        (state: RootState) => state.education);

    const { experiences } = useSelector(
        (state: RootState) => state.experience);

    const formatDateHandler = (date: Dayjs | null) => {
        if (!date) return '';
        const formattedDate = `${dayjs(date).format('YYYY.MM.DD')}`
        return formattedDate;
    }
    const formatAgeHandler = (date: Dayjs | null) => {
        if (!date) return '';
        const birthdayDate = dayjs(birthday);
        const dateNow = dayjs();
        const age = dateNow.diff(birthdayDate, 'year');
        return age;
    }
    const formatWorkPeriodDateHandler = (date: [Dayjs | null, Dayjs | null] | null) => {
        if (!date) return '';
        const [startDate, endDate] = date;
        if (!startDate || !endDate) return '';
        const formattedPeriodDate =
            `${dayjs(startDate).format('YYYY.MM.DD')}-${dayjs(endDate).format('YYYY.MM.DD')}`;
        return formattedPeriodDate;
    }

    return (
        <>
            <AntModal
                centered
                width={1000}
                open={open}
                onOk={onCancel}
                onCancel={onCancel}
            >
                <ReactToPrint
                    trigger={() => <Button>Print</Button>}
                    content={() => componentRef.current}
                />
                <ModalWrapper ref={componentRef}>
                    <LeftPart>
                        <div><img src={photo} alt="Avatar" /></div>
                        <div><p>Age: {formatAgeHandler(birthday)}</p>
                            <p className='insert'>{'Date of birth: ' + formatDateHandler(birthday)}</p>
                        </div>
                        <div><p>Place of residence</p>
                            <p className='insert'>{location}</p>
                        </div>
                        <div><p>Phone number</p>
                            <p className='insert'>{phone}</p>
                        </div>
                        <div><p>Skills</p>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index} className='insert'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </LeftPart>
                    <RightPart>
                        <div>
                            <p className='name'>{fullname}</p>
                            <p className='insert'>Frontend Developer</p>
                        </div>
                        <p>Образование</p>
                        <div className='bg'>
                            <p className='insert'> {institution} </p>
                            <p className='insert'>Degree - {degree} </p>
                            <p className='insert'>Date of graduation - {formatDateHandler(graduateDate)}</p>
                        </div>
                        <div>
                            <p>Work experience</p>
                            {experiences.map((experience, index) => (
                                <div key={index}>
                                    <p className='bg'>{experience.company}</p>
                                    <p className='insert bg'>{experience.position}</p>
                                    <p className='insert bg'>Work period -{formatWorkPeriodDateHandler(experience.term)}</p>
                                    <p>Description</p>
                                    <p className='insert'>{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </RightPart>
                </ModalWrapper >
            </AntModal>
        </>
    );
};
