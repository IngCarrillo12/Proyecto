import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext'
export const UserMenu = ({email, setUserMenu}) => {
    const {logout} = useContext(authContext)
  return (
    <div className='userMenu'>
        <h3>{email}</h3>
        <p>Juan Elias</p>
        <a>Restablecer Contraseña</a>
        <button onClick={()=>{logout();setUserMenu(false)}}>Logout</button>
    </div>
  )
}
