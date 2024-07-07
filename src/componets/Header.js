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
            <Link to={"/"}>Home</Link>
            <Link to={"/Profile"}>Profile</Link>
            <Link to={"/AddProduct"}>AddProduct</Link>
            <Link>Home</Link>
            <Link>Home</Link>
        </div>
       </div>
    </div>
  )
}

export default Header