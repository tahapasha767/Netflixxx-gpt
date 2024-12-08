import { createSlice } from "@reduxjs/toolkit";
const langSlice=createSlice({
    name:"lang",
    initialState:{
        what_is_the_lang:"English"
    },
    reducers:{
        change_the_lang:(state,action)=>{
            state.what_is_the_lang=action.payload;
        }
    }
})
export const{change_the_lang}=langSlice.actions;
export default langSlice.reducer;