'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllPosts } from '@/lib/postsSlice'
import { state } from '../interfaces/state' 
import SinglePost from "../_Component/singlepost/page"

import {Grid} from '@mui/material'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AddPost from "../_Component/addpost/page"


interface Post {
  _id: string;
  body: string;
}

export default function Profile() {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const { allPosts, isLoading, isError } = useSelector((state: state) => state.Posts)

  if (isLoading) return <HourglassBottomIcon/>
  if (isError) return <p>Error loading posts.</p>

  return (
    <>
    <Grid sx={{marginTop:'30px'}} container spacing={2}>
    {isLoading?<HourglassBottomIcon/>  :allPosts?.map((post: Post) => (
       <SinglePost postdetails={post}/>
       
      )
      )
      
      } 
</Grid>

<Grid container>

  <AddPost/>



</Grid>
      
    </>
  )
}
