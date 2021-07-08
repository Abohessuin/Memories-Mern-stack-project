import * as api from '../api';

export const getposts =()=> async(dispatch)=>{
      try{
        const {data} = await api.getPostsRequest();
        dispatch({type:"FETCH_POSTS",payload:data});
      }catch(error){
          console.log(error);
      }
}

export const createpost =(post) =>async (dispatch) =>{
      try {
        
           const {data} = await api.createPostRequest(post);
       
           dispatch({type:"CREATE_POST",payload:data});
      }catch(error){
          console.log(error);

      }
}






