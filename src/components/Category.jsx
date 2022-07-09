import { RiMedicineBottleFill } from 'react-icons/ri';
import { FaMortarPestle, FaPills, FaYinYang } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/CategorySupp/ayurveda'}>
            <FaMortarPestle />
            <p>Ayurveda</p>
        </SLink>
        <SLink to={'/CategorySupp/traditional-chinese-medicine'}>
            <FaYinYang />
            <p>TCM</p>
        </SLink>
        <SLink to={'/CategorySupp/vitamin'}>
            <RiMedicineBottleFill />
            <p>Vitamins</p>
        </SLink>
        <SLink to={'/CategorySupp/pharma'}>
            <FaPills />
            <p>Pharma</p>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
    background: #0F210E;
    cursor: pointer;
    padding: .5rem;
    min-width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 .75rem;
    p{
        margin-top: .25rem;
    }
    svg{
        color: whitesmoke;
        font-size: 1.5rem;
    }
    &.active{
        background: #788378;
        svg{
            color: white;
        }
        p{
            color: white;
        }
    }
`

export default Category