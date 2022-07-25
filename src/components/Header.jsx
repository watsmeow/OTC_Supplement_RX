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
    font-weight: bold;
    color: #FF6C37;
    font-size: 4rem;
    vertical-align: top;
    text-shadow: 4px 4px 2px rgba(252,173,35,0.6);
  }
  span {
    font-family: 'Bebas Neue', cursive;
    font-size: 5rem;
    vertical-align: middle;
  }
`

const HLink = styled(Link)`
  text-decoration: none;
`