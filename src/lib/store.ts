import {configureStore} from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'


export let store = configureStore({

    reducer:{
        posts:postsReducer
    }
})