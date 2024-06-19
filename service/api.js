import axios from "axios";

const BACKEND_URL= 'https://rickandmortyapi.com';
const BACKEND_API= 'https://rickandmortyapi.com/api';
const TABLE = 'character';
const BACKEND_ENDPOINT_CHARACTER= 'https://rickandmortyapi.com/api/character';

export const fetchLogin = (body)=>{
    axios.post('http://127.0.0.1:8080/auth/login', {
        email: body.email,
        password: body.password   
      })
      .then(function (response) {
        localStorage.setItem('token',response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const fetchRegister =(body)=> {
    axios.post('http://127.0.0.1:8080/auth/register', {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        phone: body.phone
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}



export const fetchDeletePassenger =(id)=>{

axios.delete(`http://127.0.0.1:8080/passenger/${id}`,{
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},

})
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

