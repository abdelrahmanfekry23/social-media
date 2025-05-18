import { addPost } from '@/lib/postsSlice';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch } from 'react-redux';


import { useParams } from 'next/navigation';
import { AppDispatch } from '../../../../src/lib/store'


export default function AddPost() {
  const { postId } = useParams();
  let dispatch = useDispatch<AppDispatch>();

  function handelSubmit(e: any) {
    e.preventDefault();

    let formData = new FormData();
    let body = e.target?.body.value;
    let image = e.target?.image.files[0];

    formData.append("body", body);
    formData.append("image", image);

    //formData.append("post", postId); // مهم جدًا

    dispatch(addPost(formData));
  }




    return(
        <>
        <form style={{width:"80%", margin:"auto"}} onSubmit={handelSubmit}>

            <TextareaAutosize className='form-control' maxRows={10} minRows={6} name='body'>

            </TextareaAutosize>

            <input type="file" className=' btn' name='image'/>

            <button className='btn' type='submit'>Add Post</button>

        </form>
        
        </>
    )
}