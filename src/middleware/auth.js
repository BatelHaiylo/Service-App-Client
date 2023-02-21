import axios from "axios"
import Cookies from 'js-cookie'

const jwtInterceptor = axios.create({
    baseURL:"http://serviceapp-env.eba-hb2wbzav.ap-northeast-1.elasticbeanstalk.com"
})
 jwtInterceptor.defaults.headers.common['authorization'] = Cookies.get('authorization');

export default jwtInterceptor;