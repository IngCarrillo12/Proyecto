import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { authContext } from '../context/AuthContext'
import { UserMenu } from "./index"

export const Navigation = () => {
  const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext)
  const {user} = useContext(authContext)
  const [userMenu, setUserMenu] = useState(false)
  const navigate = useNavigate()
  const onSearchSubmit = (e)=>{
    e.preventDefault()
      if(valueSearch!=='')(navigate(`/search`,{
      state: valueSearch
    }),onResetForm())
    
  }
  return (
    <>
      <header className="container">
    <Link to={"/"} className="logo">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo Podedex" />
    </Link>
        <form className='form-search' onSubmit={onSearchSubmit}>
            <div className="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-search">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input 
                className="input-search"
                type="search" 
                placeholder="Buscar nombre de pokemon"
                name="valueSearch" 
                value={valueSearch}
                onChange={onInputChange}
                id=""
                />                    
            </div>
            <button className="btn-search btn">Buscar</button>
        </form>
        {
          !user?(
            <>
            <button className='btn-search btn' onClick={()=>navigate("/login")}>Login</button>
            <button className='btn-search btn' onClick={()=>navigate("/register")}>register</button>
            </>
          ):(
            <div>
              <img width="60px" onClick={()=>setUserMenu(!userMenu)} src="data:image/jpeg;base64,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" alt="" />
            </div>
          )
          }
          {
            userMenu&&(
              <UserMenu setUserMenu={setUserMenu} email={user.email} />
            )
          }
          
       
    </header>
      <Outlet/>
    </>
  )
}
