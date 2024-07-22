import React, { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
import  Axios from 'axios'
function Loginpage() {
    const [UserName,setUserName] =useState("")
const [UserPassword,setUserPassword] =useState("")
const navigate = useNavigate();
    const navigatetoregister =()=>{
       navigate("/register")
 }
 const  gettingUserName=(e) =>{
           setUserName(e.target.value)
 } 
 const gettingUserPassword=(e)=>{
setUserPassword(e.target.value)
 } 

 const  redirecttohome = async ()=>{ 
 
     const response= await Axios.post("http:localhost:3005/as/getdetails");
     if(response.status===200){
         navigate("/homepage")
     }else{
        alert("invalid credentials");
     }
 }
  return (
    <div className="flex flex-col  bg-red-300 text-center bg-cover bg-no-repeat h-screen
    bg-[url('https://t3.ftcdn.net/jpg/00/94/35/10/240_F_94351010_knuHjjEhs49tlCcbyg2n5W3FhMgDQAi1.jpg')]">
      <form>
         <div class=" border border-black-500 p-10 rounded">
            <h1 class="text-white  font-sans text-m">Login</h1>
        <input type="text" placeholder="Enter your name" class=" border border-white-100 rounded"
        onChange={gettingUserName}/> 
        <br/>
        <br/>
        <input type="password" placeholder="Enter your password" class=" border border-white-100 rounded"
         onChange={gettingUserPassword}/> 
        <br/>
        <br/>
        <button type="submit" class ="bg-white px-3" onClick={redirecttohome}>Login</button> 
        <div>
            <button class="text-white">Dont have an account? <span onClick={navigatetoregister}>
            Create now</span></button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Loginpage
