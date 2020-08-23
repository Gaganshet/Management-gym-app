import axios from 'axios';
const SERVER = 'http://85.187.132.179:3000/api';

export async function getRequest(url){
    try{
        const response =  await axios.get(`${SERVER}${url}`);
        return response; 
    }catch(error){
        return error;
    }
  };

  export async function getParamRequest(url , getData){
    try{
    const response =  await axios.get(`${SERVER}${url}` , {
        data : getData
    });
    return response; 
    }catch(error){
        return error;
    }
  };

  export const postRequest = async (url , inputObject) => {
    try{
        const response =  await axios.post(`${SERVER}${url}` , {
          inputObject
        });
        return response; 
    }catch(error){
        return error;
    }
  };

  export const postLoginRequest = async (url , inputObject) => {
    try{
        const response =  await axios.post(`${SERVER}${url}` , 
          inputObject
        );
        return response; 
    }catch(error){
        return error;
    }
  };

  export async function putParamRequest(url , reqObj){
    try{
    const response =  await axios.put(`${SERVER}${url}` , {
        reqObj
    });
    return response; 
    }catch(error){
        return error;
    }
  }
    
  export async function putRequest(url , putData){
    try{
      const response =  await axios.put(`${SERVER}${url}`);
      return response; 
    }catch(error){
      return error;
    }
  };

  export async function deleteRequest(url){
    try{
        const response =  await axios.delete(`${SERVER}${url}`);
        return response; 
    }catch(error){
        return error;
    }
  };
