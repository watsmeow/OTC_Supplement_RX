import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Head>
      <HLink to={`/`}><h1>OTC Supplement <span>Rx</span></h1></HLink>
    </Head>
  )
}

export default Header

const Head = styled.div`
  margin: 3rem 0;
  h1 {
    color: #091903;
    font-size: 3.5rem;
    vertical-align: top;
    text-shadow: rgb(34, 51, 39) 2px 0px 0px, rgb(34, 51, 39) 1.75517px 0.958851px 0px, rgb(34, 51, 39) 1.0806px 1.68294px 0px, rgb(34, 51, 39) 0.141474px 1.99499px 0px, rgb(34, 51, 39) -0.832294px 1.81859px 0px, rgb(34, 51, 39) -1.60229px 1.19694px 0px, rgb(34, 51, 39) -1.97998px 0.28224px 0px, rgb(34, 51, 39) -1.87291px -0.701566px 0px, rgb(34, 51, 39) -1.30729px -1.5136px 0px, rgb(34, 51, 39) -0.421592px -1.95506px 0px, rgb(34, 51, 39) 0.567324px -1.91785px 0px, rgb(34, 51, 39) 1.41734px -1.41108px 0px, rgb(34, 51, 39) 1.92034px -0.558831px 0px;
    text-shadow: 0px -2px 8px rgba(255,255,255,1);
  }
  span {
    font-family: 'Spirax', cursive;
    font-size: 5rem;
    vertical-align: middle;
  }
`

const HLink = styled(Link)`
  text-decoration: none;
`