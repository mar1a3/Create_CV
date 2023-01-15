import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from 'dayjs';

interface PersonalInfoState {
    fullname: string;
    jobtitle:string;
    location: string;
    phone: string;
    birthday: Dayjs | null;
    photo: string;

}
const initialState: PersonalInfoState = {
    fullname: '',
    jobtitle:'',
    location: '',
    phone: '',
    birthday: null,
    photo: ''

}
export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        setPersInfo: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
        },
        setJobTitle: (state, action: PayloadAction<string>) => {
            state.jobtitle = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setBirthday: (state, action: PayloadAction<Dayjs>) => {
            state.birthday = action.payload;
        },
        setPhoto: (state, action: PayloadAction<string>) => {
            state.photo = action.payload;
        }
    }
})

export const { setPersInfo, setJobTitle, setLocation, setPhone, setBirthday, setPhoto } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;