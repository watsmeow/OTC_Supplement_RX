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
    color: #FF6C37;
    text-align: center;
    text-decoration: none;
    background: rgba(247, 249, 252);
    cursor: pointer;
    padding: .5rem;
    min-width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 0 .75rem;
    box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    -webkit-box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    -moz-box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    p{
        margin-top: .25rem;
        text-transform: uppercase;
        font-size: 12px;
    }
    svg{
        color: #FF6C37;
        font-size: 1.5rem;
    }
    &.active{
        background: #FF6C37;
        color: rgba(247, 249, 252);
        svg{
            color: rgba(247, 249, 252);
        }
    }
`

export default Category