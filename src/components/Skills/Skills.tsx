import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoCard } from '../InfoCard/InfoCard';
import { Select } from 'antd';
import { Rate } from 'antd';

import { TagsWrapper, StyledTag, SkillContainer } from './style';
import { SkillsOptions } from './consts';

import { addSkills, removeSkills, updateSkillLevel } from '../../slices/skillsSlice';
import { RootState } from '../../store';

export const Skills = () => {
    const dispatch = useDispatch();
    const selectedSkills = useSelector((state: RootState) => Object.keys(state.skills.skills));
    const skillLevels = useSelector((state: RootState) => state.skills.skills);


    const handleChangeSkills = (value: string[]) => {
        const newSkills = value.filter(skill => !(skill in skillLevels));

        if (newSkills.length > 0) {
            const newSkillsWithLevels = newSkills.map(skill => ({ skill, level: 3 }));
            dispatch(addSkills(newSkillsWithLevels));
        }
        const removedSkills = selectedSkills.filter(skill => !value.includes(skill));
        removedSkills.forEach(skill => {
            dispatch(removeSkills(skill));
        });
    };
    const handleTagClose = (removedTag: string) => {
        dispatch(removeSkills(removedTag));
    };
    const handleRateChange = (skill: string, value: number) => {
        dispatch(updateSkillLevel({ skill, level: value }));
    };
    return (
        <InfoCard title="Skills">
            <Select
                mode="multiple"
                placeholder="Choose skills"
                options={SkillsOptions}
                onChange={handleChangeSkills}
                value={selectedSkills}
                style={{ width: '100%' }}
            />
            <TagsWrapper>
                {selectedSkills.map((skill: string) => (
                    <SkillContainer key={skill}>
                        <StyledTag onClose={() => handleTagClose(skill)}>
                            {skill}
                        </StyledTag>
                        <Rate
                            value={skillLevels[skill] || 3}
                            onChange={(value) => handleRateChange(skill, value)}
                        />
                    </SkillContainer>
                ))}
            </TagsWrapper>
        </InfoCard>
    );
};