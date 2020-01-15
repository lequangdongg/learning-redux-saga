import axios from 'axios';

class AxiosService {
  constructor(){
    const instace = axios.create();
    instace.interceptors.response.use(this.handleSucess,this.handleError);
    this.instace = instace;
  }

  handleSucess(response){
    return response;
  }

  handleError(error){
    return Promise.reject(error);
  }

  get(url){
    return this.instace.get(url);
  }
}

export default new AxiosService();