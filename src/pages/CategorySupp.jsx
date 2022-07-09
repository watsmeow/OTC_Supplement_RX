import React from 'react';
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function CategorySupps() {

  const [category, setCategory] = useState([]);
  let params = useParams();

  const getCategorySupps = async (category) => {
    const data = await fetch(`https://supplements.p.rapidapi.com/SupplementSearch?term=${category}`, {
      headers: new Headers({
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        }),
    });
    const supps = await data.json();
    setCategory(supps)
  };

useEffect(() => {
  getCategorySupps(params.type)
  console.log(params.type)
}, [params.type]);

  return (
    <Wrapper>
    <h2>Supplements commonly used in</h2>

    <Splide options={{
                perPage: 4,
                pagination: false,
                drag: "free",
                gap: "3rem",
            }}>
      {category.map((supp, index) => {
        if (index != 0)
        return(
          <SplideSlide>
            <Card key={supp.id}>
              <h5>{supp.name}</h5>
              <p>{supp.quickSummary}</p>
            </Card>
          </SplideSlide>
        )
      })}
      </Splide>
      </Wrapper>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
    width: 17rem;
    min-height: 22rem;
    border-radius: 2rem;
    border: solid black 2px;
    padding: 2rem;
    overflow: hidden;

    p{
        margin-bottom: .5rem;
    }
`;


export default CategorySupps