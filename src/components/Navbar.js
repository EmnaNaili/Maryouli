import React from 'react'
import {Link}from 'react-router-dom'
export default function Navbar(){
return(
<nav className='navbar'>
{/* <h1>Maryouli.tn</h1> */}
<Link style={{textDecoration: "none" , color : "white", margin:"2%"}} to="/">Maryouli.tn</Link>
<Link style={{textDecoration: "none" , color:"#075E54" , marginRight:"10px", backgroundColor: "whitesmoke", borderRadius:"15px" , width:"150px", textAlign:"center"}} to="/SignIn" >SignIn</Link>





</nav>
)


}