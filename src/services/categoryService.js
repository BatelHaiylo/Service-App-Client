import axios from "axios";

export const getCategory = async () => {
  const response = await axios.get("http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/category")

  const category = await response.data;
  return category;
};
export const getCategoryById = async (id) => {
  const response = await axios.get(`http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/category/${id}`)

  const category = await response.data;
  return category;
};