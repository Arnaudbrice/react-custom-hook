import React, { useState } from "react";
import useForm from "./useForm";


const App = () => {
  const {data,loading,error} = useForm("https://jsonplaceholder.typicode.com/users");
  console.log(data);

if(loading){
  return <h1>Loading...</h1>
}

if (error) {
  console.log(error);
  return <h1>Something went wrong</h1>
  
}

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "20px",marginBottom: "20px",color:"blue" }}>CUSTOM HOOK EXAMPLE</h2>



      <div id="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr)) ", gap: "20px",padding: "20px", border: "1px solid black" }}>
      {data.map((user) => (
        <div key={user.id} style={{ border: "1px solid black", padding: "20px", textAlign: "center", borderRadius: "10px", backgroundColor: "lightgray", color: "black", boxShadow: "10px 10px 5px grey" }}>
          <h3 style={{ textTransform: "uppercase",height:"50px"}}>{user.name}</h3> 
          <p >{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
          <p>{user.address.city}</p>
      
        </div>
    
    
      ))}
     
    </div>
    </>
  );
};



export default App;
