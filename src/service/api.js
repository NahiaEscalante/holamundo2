import axios from "axios";

const URL = "http://127.0.0.1:8080";

export const fetchLogin = async (body) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, body);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRegister = async (body) => {
  try {
    const response = await axios.post(`${URL}/auth/register`, body);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGetRides = async (page, size) => {
  try {
    const response = await axios.get(
      `${URL}/ride/user?page=${page}&size=${size}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const patchRide = async(id,body)=>{
  try{
    const response= await axios(`${URL}/ride/${id}/status`, body,
    {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }
  )
  return response;
  }catch(error){
    console.error(error);
  }
 

}


export const deleteRide = async(id)=>{
    try{
        const response= await axios.delete(`${URL}/ride/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        return response;

    }catch(error){
        console.error(error);
    }
}