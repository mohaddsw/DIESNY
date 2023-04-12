import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from '../features/users/usersSlice'
import movieReduser from '../features/movie/movieSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReduser
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false
    })
})