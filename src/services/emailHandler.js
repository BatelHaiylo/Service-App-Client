import axios from "axios";

axios.defaults.baseURL = "http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/emailHandler";

export const postContactUs = async (contactUser) => 
{
  const response = await axios.post("http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/emailHandler/contactUs",contactUser)

  const category = await response.data;
  return category;
};

export const postDomain = async (domain) => {
  const response = await axios.post("http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/emailHandler/domain", domain)

  const category = await response.data;
  return category;
};

export const postContactUsPayment = async (contactUser) => 
{
  const response = await axios.post("http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com/emailHandler/contactUs/payment",contactUser)

  const category = await response.data;
  return category;
};

