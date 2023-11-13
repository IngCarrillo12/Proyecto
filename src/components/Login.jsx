import React, { useContext, useState } from 'react'
import { authContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
export const Login = () => {
  const {login} = useContext(authContext)
  const [user, setUser] = useState({email:"", password:""})
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
    
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" onChange={handleChange} name='email' placeholder='youremail@company.ltd' />
      <label htmlFor="password">Password</label>
      <input type="password" onChange={handleChange} name='password' id='password' placeholder='**********' />
      <button type='submit'>Register</button>
    </form>
    </>
  )
}
