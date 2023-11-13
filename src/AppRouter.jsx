import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import {Navigation} from './components/Navigation'
import { Login } from "./components/Login";
import { Register } from "./components/Register"
import { HomePage, SearchPage, PokemonPage } from "./pages";

export const AppRouter = ()=>{
    return <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />}/>
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path ='/search' element={<SearchPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Route>
        <Route path="*" element={<Navigate to ='/'/>} />
    </Routes>
}