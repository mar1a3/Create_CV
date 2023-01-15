import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Modal as AntModal, ModalProps } from 'antd';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { Layout, Typography } from "antd";
import { useSelector } from "react-redux";
import { Rate } from "antd";
import { RootState } from "../../store";
import Boss from '../../assets/boss.jpg';
import { Button, StyledDivider, ResumeContainer } from "./style";

interface CustomModalProps extends ModalProps {
  isModal?: boolean;
}

export const Modal: React.FC<CustomModalProps> = ({ open, onCancel, isModal }) => {
  const componentRef = useRef(null);

  const { fullname, jobtitle, location, phone, birthday, photo } = useSelector(
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
  const displayFullname = fullname || "Jorge Tarovski";
  const displayJobtitle = jobtitle || "Frontend developer";
  const displayLocation = location || "London";
  const displayPhone = phone || "+44 999 123 456";

  const displayAge = formatAgeHandler(birthday) || "20";
  const displayBirthday = formatDateHandler(birthday) || "1990-01-01";

  const displayInstitution = institution || "MSU";
  const displayGraduateDate = formatDateHandler(graduateDate) || "2024-06-30";
  const displayDegree = degree || "Bachelor Computer Science";

  const displaySkills = Object.keys(skills).length > 0 ? skills : { "JavaScript": 4, "React": 5, "TypeScript": 3 };


  const resumeContent = (
    <ResumeContainer ref={componentRef}>
      <div className='personalInfo'>
        <div className='avatarContainer'>
          <img src={photo || Boss} alt="Avatar" />
        </div>
        <div className='rightSide'>
          <p className='name'>{displayFullname}</p>
          <b><p>{displayJobtitle}</p></b>
          <p>{displayLocation}</p>
        </div>
      </div>
      <div className='contacts'>
        <div>
          <p>{displayPhone}</p>
        </div>
        <div>
          <p>Age: {displayAge}</p>
          <p>{displayBirthday}</p>
        </div>
      </div>

      <StyledDivider />
      <div className='education'>
        <p className='section-title'>Education</p>
        <div>
          <p> {displayInstitution} </p>
          <p>Date of graduation - {displayGraduateDate}</p>
          <p>Degree - {displayDegree} </p>
        </div>
      </div>
      <StyledDivider />
      <div className='skills'>
        <p className='section-title'>Skills</p>
        <ul>
          {Object.entries(displaySkills).map(([skill, level]) => (
            <li key={skill}>
              {skill} - <Rate disabled value={level} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <StyledDivider />
        <div className='work-experience'>
          <p className='section-title'>Work Experience</p>
          {experiences.map((experience, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p className='experience-position'>{experience.position}</p>
              <div className='experience-text'>
                <span>{experience.company}</span>
                <span> {formatWorkPeriodDateHandler(experience.term)}</span>
              </div>
              <p className='insert'>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ResumeContainer>
  );

  return isModal ? (
    <>
      <AntModal centered width={600} open={open} onOk={onCancel} onCancel={onCancel}>
        {resumeContent}
        <ReactToPrint
          trigger={() => <Button>Print</Button>}
          content={() => componentRef.current}
        />
      </AntModal>
    </>
  ) : (
    <div>{resumeContent}</div>
  );
};

