import { createSlice } from "@reduxjs/toolkit";

const initialState={
    recommend:null,
    newDisney:null,
    original:null,
    tranding:null
};

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
           
            state.recommend=action.payload.recommend;
            state.newDisney=action.payload.newDisney;
            state.original=action.payload.original;
            state.tranding=action.payload.tranding
        }
    }
})

export const {setMovies}=movieSlice.actions
export const selectRecommend=state=>state.movie.recommend
export const selectNewDisney=state=>state.movie.newDisney
export const selectOriginal=state=>state.movie.original
export const selectTranding=state=>state.movie.tranding

export default movieSlice.reducer;