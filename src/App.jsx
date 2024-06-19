import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { fetchLogin, fetchRegister } from "../service/api";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchLogin({email:"jmonja@utec.edu.pe", password: "123456" });
    
  }, []);


  // useEffect(() => {
  //   fetchRegister(
  //     {
  //       firstName: "Alejandra4",
  //       lastName: "Ccoyllo4",
  //       email: "alejandra4@gmail.com",
  //       password: "123456",
  //       phone: "1223324"
  //     }
  //   )
  // }, []);

  


  return (
    <div className="bg-blue-500 text-white p-4">
      ¡Hola, Tailwind CSS en React!
    </div>
  );
}

export default App;
