import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from 'dayjs';

interface EducationState {
    institution: string,
    graduateDate: Dayjs | null,
    degree: string,
}
const initialState: EducationState = {
    institution: '',
    graduateDate: null,
    degree: '',
}

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setInstitution: (state, action: PayloadAction<string>) => {
            state.institution = action.payload;
        },
        setGraduate: (state, action: PayloadAction<Dayjs>) => {
            state.graduateDate = action.payload;
        },
        setDegree: (state, action: PayloadAction<string>) => {
            state.degree = action.payload;
        }
    }
})

export const { setInstitution, setGraduate, setDegree } = educationSlice.actions;
export default educationSlice.reducer;