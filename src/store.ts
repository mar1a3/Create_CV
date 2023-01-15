import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from './slices/personalInfoSlice';
import educationReducer from "./slices/educationSlice";
import skillsReducer from "./slices/skillsSlice";
import experienceReducer from './slices/workExperienceSlice';

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        education: educationReducer,
        skills: skillsReducer,
        experience: experienceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
