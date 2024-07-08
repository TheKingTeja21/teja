import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{width:'100%',backgroundColor:'#635B5B',marginTop:30,borderRadius:2,height:50,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
       <div style={{paddingLeft:20,width:'40%'}}>
        <text style={{fontSize:30}}>Welcome</text>
       </div>
       <div style={{width:'60%'}}>
        <div style={{display:'flex',justifyContent:'space-evenly',}}>
            <Link to={"/"} style={{color:"#E35050"}}>Home</Link>
            <Link to={"/Profile"} style={{color:"#E35050"}}>Profile</Link>
            <Link to={"/AddProduct"}style={{color:"#E35050"}}>AddProduct</Link>
            
            <div style={{display:'flex',justifyContent:'space-evenly'}}>

            <Link to={"/Login"} style={{color:"#000000",backgroundColor:"#4334BE",borderRadius:19,width:80,textAlign:'center',height:30,marginRight:5}}>Login</Link>
           
            <Link to={"/Signup"}>Sign Up</Link>
            </div>
           
        </div>
       </div>
    </div>
  )
}

export default Header