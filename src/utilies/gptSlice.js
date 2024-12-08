import React from 'react'
import { createSlice} from '@reduxjs/toolkit'
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        flag_for_gpt:false
    },reducers:{
        change_the_flag:(state,action)=>{
            state.flag_for_gpt=!state.flag_for_gpt;
        }
    }
});
export const{change_the_flag}=gptSlice.actions;
export default gptSlice.reducer;