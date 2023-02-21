import axios from "axios";

axios.defaults.baseURL = "http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/review";

export const createReview=async(data,email)=>{

    const response=await axios.post(`http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/review/${email}`,{
        userEmail:data.userEmail,
        comments:data.comments,
        image:data.image,
        name:data.name,
        rate:data.rate
    })

    const newReview = await response.data
    return newReview;

}

export const deleteReview=async(id)=>{
const response=await axios.delete(`http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/review/${id}`)
const deleteDate=await response.data
return deleteDate;
}