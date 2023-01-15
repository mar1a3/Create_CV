import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';

import { InfoCard } from '../InfoCard/InfoCard';
import { Input } from '../Input/Input';
import { FormControl } from '../FormControl/FormControl';
import { DescriptionField } from '../DescriptionField/DescriptionField';
import { Button } from '../Button/Button';
import { ParagraphWrapper } from './style';

import { addExperience, removeExperience, updateExperience } from '../../slices/workExperienceSlice';
import { RootState } from '../../store';

const { RangePicker } = DatePicker;

export const WorkExperience = () => {
    const dispatch = useDispatch();
    const experiences = useSelector((state: RootState) => state.experience.experiences)

    const handleAddExperience = () => {
        dispatch(addExperience());
    };
    const handleRemoveExperience = (id: number) => {
        dispatch(removeExperience(id));
    };
    const handleInputChange = (id: number, field: string, value: string | null | [Dayjs | null, Dayjs | null]) => {
        const currentBlock = experiences.find(block => block.id === id);
        if (currentBlock) {
            const updatedBlock = { ...currentBlock, [field]: value };
            dispatch(updateExperience({ currentBlock: updatedBlock, index: experiences.indexOf(currentBlock) }));
        }
    };

    return (
        <InfoCard title="Work experience">
            {experiences.map((block, index: number) => (
                <React.Fragment key={block.id}>
                    <ParagraphWrapper>
                        <p>Workplace - {index + 1}</p>
                        {index > 0 && <DeleteOutlined className="delete-icon" onClick={() => handleRemoveExperience(block.id)} />}
                    </ParagraphWrapper>
                    <FormControl label="Company" >
                        <Input
                            placeholder="Company"
                            value={block.company}
                            onChange={(e) => handleInputChange(block.id, 'company', e.target.value)}
                        />
                    </FormControl>
                    <FormControl label="Position" >
                        <Input
                            placeholder="Position"
                            value={block.position}
                            onChange={(e) => handleInputChange(block.id, 'position', e.target.value)}
                        />
                    </FormControl>
                    <FormControl label="Work period" >
                        <RangePicker
                            format="YYYY-MM-DD"
                            onChange=
                            {(dates: null | [Dayjs | null, Dayjs | null]) => handleInputChange(block.id, 'term', dates)}
                        />

                    </FormControl>
                    <DescriptionField value={block?.description || ''}
                        onChange={(newContent) => handleInputChange(block.id, 'description', newContent)} />


                    <FormControl label="" >
                        <Button onClick={handleAddExperience} />
                    </FormControl>
                </React.Fragment>
            ))}
        </InfoCard>
    );
};
