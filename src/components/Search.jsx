import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch></FaSearch>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        value={input} />
    </FormStyle>
  )
}


const FormStyle = styled.form`
    margin: 0rem auto;
    position: relative;
    width: 75%;
    
    input{
        border: solid #001A00 2px;
        background: #FDFDFD;
        font-size: 1.5rem;
        padding: 1rem 4rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -webkit-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -moz-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    }
    svg{
        position: absolute;
        top: 35%;
        left: 2%;
        transform: translate(100%, -%50);
        color: black;
        font-size: 1.5rem;
    }
`
export default Search