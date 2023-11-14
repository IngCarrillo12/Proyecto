import React, { useContext, useState } from 'react'
import { authContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
export const Register = () => {
  const {signUp} = useContext(authContext)
  const [user, setUser] = useState({nickName: "",email:"", password:"", imageUrl:""})
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value,
      imageUrl:'https://img.icons8.com/ios-filled/50/000000/user-male-circle.png'
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const resultSignUp = await signUp(user.email, user.password, user.nickName, user.imageUrl)
      if(resultSignUp)navigate("/")
      
    } catch (error) {
      console.log(error.message)
    }
    
  }
  return (
    <>
   <div className='container center'>
    <div className="form-container">
      <p className="title">Sign Up</p>
      <form action="" onSubmit={handleSubmit} className='form'>
      <div className='form_group'>
        <label htmlFor="nickName">NickName:</label>
        <input onChange={handleChange} type="text" name='nickName' className="input" placeholder="TheBeast123"/>
        </div>
        <div className='form_group'>
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} type="email" name='email' className="input" placeholder="YourEmail@company.com"/>
        </div>
        <div className='form_group'>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="password" name='password' className="input" placeholder="*******"/>
        </div>
        <button className="form-btn" type='submit'>Sign Up</button>
        </form>
      <p className="sign-up-label">
      Do you already have an account?<Link to={"/login"} className="sign-up-link">Log In</Link>
      </p>
      </div>
      </div>
    </>
  )
}
