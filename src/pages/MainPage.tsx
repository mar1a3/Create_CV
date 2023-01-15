import React from 'react';
import { CustomHeader } from '../components/CustomHeader/CustomHeader'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { Education } from '../components/Education/Education';
import { Skills } from '../components/Skills/Skills';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import { FloatButton } from '../components/FloatButton/FloatButton';
import { Modal } from '../components/Modal/Modal';
import { PageContainer, LeftSide, RightSide } from './style';

export const MainPage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 574);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 574);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <>
      <CustomHeader />
      <PageContainer>
        <LeftSide isMobile={isMobile}>
          <PersonalInfo />
          <Education />
          <Skills />
          <WorkExperience />
          <FloatButton onClick={handleOpenModal} />
        </LeftSide>
        {!isMobile && (
          <RightSide>
            <Modal isModal={false} open={true} onCancel={handleCloseModal} />
          </RightSide>
        )}
        <Modal isModal={true} open={openModal} onCancel={handleCloseModal} />
      </PageContainer>
    </>
  );
};
