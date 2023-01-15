import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from 'dayjs';

interface Experience {
    id: number,
    company: string,
    position: string,
    term: [Dayjs | null, Dayjs | null],
    description: string
}
interface ExperienceState {
    experiences: Experience[];
}
const initialState: ExperienceState = {
    experiences: [{
        id: Math.random(),
        company: '',
        position: '',
        term: [null, null],
        description: ''
    }],
};

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        addExperience: (state) => {
            const newId = Math.random();
            state.experiences.push({
                id: newId,
                company: '',
                position: '',
                term: [null, null],
                description: ''
            })
        },
        removeExperience: (state, action: PayloadAction<number>) => {
            state.experiences = state.experiences.filter((block) => block.id !== action.payload);
        },
        updateExperience: (state, action: PayloadAction<{ currentBlock: Experience, index: number }>) => {
            const { currentBlock, index } = action.payload;
            const newExperiences = [
                ...state.experiences.slice(0, index),
                currentBlock,
                ...state.experiences.slice(index + 1),
            ];
            return { ...state, experiences: newExperiences };
        },
    }
})

export const { addExperience, removeExperience, updateExperience } = experienceSlice.actions;
export default experienceSlice.reducer;