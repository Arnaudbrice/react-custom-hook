import { useRef, useEffect, useState } from "react";
import axios from "axios";
const useForm = (url) => {
 
  const [data, setData ] = useState(null);
  const [loading , setLoading ] = useState(true);
  const [error , setError  ] = useState(false);


useEffect(() => {
  
  const fetchData= async () => {
    
    try {
     
      const response = await axios.get(url);
      setData(response.data);

    } catch (error) {
      setError(true);
     
    }finally {
      setLoading(false);
    }   
  } 

  fetchData();
},[url]);  

 

  return {data,loading,error};
};

export default useForm;
