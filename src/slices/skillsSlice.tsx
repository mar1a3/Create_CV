import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SkillsState {
    skills: { [key: string]: number };  // Изменено на объект с уровнями
}

const initialState: SkillsState = {
    skills: {},  // Начальный стейт теперь пустой объект
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkills: (state, action: PayloadAction<{ skill: string, level: number }[]>) => {
            action.payload.forEach(({ skill, level }) => {
                state.skills[skill] = level;  // Добавляем навык с уровнем
            });
        },
        removeSkills: (state, action: PayloadAction<string>) => {
            delete state.skills[action.payload];  // Удаляем навык по ключу
        },
        updateSkillLevel: (state, action: PayloadAction<{ skill: string, level: number }>) => {
            state.skills[action.payload.skill] = action.payload.level;  // Обновляем уровень навыка
        }
    }
});

export const { addSkills, removeSkills, updateSkillLevel } = skillsSlice.actions;
export default skillsSlice.reducer;



// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface SkillsState {
//     skills: string[];
// };

// const initialState: SkillsState = {
//     skills: [],
// }

// export const skillsSlice = createSlice({
//     name: 'skills',
//     initialState,
//     reducers: {
//         addSkills: (state, action: PayloadAction<string[]>) => {
//             state.skills = action.payload;
//         },
//         removeSkills: (state, action: PayloadAction<string>) => {
//             state.skills = state.skills.filter((tag) => tag !== action.payload)
//         }
//     }
// });

// export const { addSkills, removeSkills } = skillsSlice.actions;
// export default skillsSlice.reducer;