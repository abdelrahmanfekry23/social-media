import AddPost from '@/app/_Component/addpost/page';
import { posts } from './../../node_modules/@reduxjs/toolkit/src/query/tests/mocks/handlers';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



let headers = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgyODY3ZTM4MDNmNzZiZjAwYzJmMGE0IiwiaWF0IjoxNzQ3NDc4NTI0fQ.r4hlR6_--L-k5tS_8fvaCaAjfEMu2VxCFJ_sxuLzwGo"
}


export let getAllPosts = createAsyncThunk('postsSlice/getAllPosts' ,async ()=>{
  let response = await  fetch(`https://linked-posts.routemisr.com/posts?limit=50`,{
    method:"GET",
    headers:headers

  })


  
  
  
  let data = await response.json();
  
  return data

})


  export let addPost = createAsyncThunk('postsSlice/addPost' ,async (formData)=>{
  let response = await  fetch(`https://linked-posts.routemisr.com/posts`,{
    body:formData,
    method:"POST",
    headers:headers

  })
let data = await response.json();
console.log(data)
  return data

})

export  let initialState ={allPosts:[] , userPosts:[], isLoading:false , isError:null}

  let postsSlice = createSlice({
    name:'postsSlice',
    initialState:initialState,
   extraReducers:(builder)=>{
    builder.addCase(getAllPosts.fulfilled , (state , action)=>{
        state.allPosts = action.payload.posts
        state.isLoading = false
    }),
     builder.addCase(getAllPosts.pending , (state , action)=>{
        state.isLoading = true
    }),
     builder.addCase(getAllPosts.rejected , (state , action)=>{
        state.isError = action.payload
    }),
     builder.addCase(addPost.fulfilled , (state , action)=>{
        state.allPosts = action.payload.posts
        state.isLoading = false
    })
   },

   reducers:{

   }

    }
)

export  let postsReducer = postsSlice.reducer