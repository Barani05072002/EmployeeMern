import React, { useState } from 'react'
import '../styles/Login.css'

const Login = () => {
  const [data,setData] = useState({
    UserName : "",
    Password : ""
  })
  const [warn,setWarn] = useState({display : "none"})
  const [login,setLogin] = useState(false)
  const onChangeHandler = (e)=>{
      const namee = e.target.name
      setData({...data,[namee] : e.target.value})
  }

  const handelLogin = async(e)=>{
    e.preventDefault()
    const url = "http://localhost:5555/api/users/"+data.UserName
    const respose = await fetch(url,{method : "GET",})
  
    respose.then((res)=>res.json)
    .then(async(res)=>{
        const url = "http://localhost:555/api/emps"+res.UserName
        const response = await fetch(url,{method : "GET"})
        response.then(res=>res.json())
        .then(setLogin(!login))
        .catch(setWarn({display:"block"}))
    })
    .catch((err)=>{display:"block"})
  }
  return (
    <div className="container">
        <h1>Login</h1>
        <form action="Dashboard.html" className="card-form">
            <div className="input">
                <input type="text" className="input_field" name='UserName' value={data.UserName} 
                  onChange={onChangeHandler}
                required/>
                <label className="input_label">Username</label>
            </div>
            <div className="input">
                <input type="password" className="input_field" name='Password' value={data.Password}
                  onChange={onChangeHandler}
                required />
                <label className="input_label">Password</label>
            </div>
            <button className="card_button" onClick={handelLogin}>Submit</button>
        </form>
        {login && <Redirect to="/Dashboard"/>}
        <p style={warn}>Invalid User</p>
    </div>
  )
}

export default Login