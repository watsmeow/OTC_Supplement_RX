import React from 'react';
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function CategorySupps() {

  const [category, setCategory] = useState([]);
  const suppName = () => {
    console.log(category)
    if (category[0].name == 'Vitamin') {
      return 'Vitamin Therapy'
    } else {
      return category[0].name
    }
  }

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
    <h2>Supplements commonly used in </h2>

    <Splide options={{
                perPage: 4,
                breakpoints: {
                  900: {
                      perPage: 1,
                    },
                },
                pagination: false,
                drag: "free",
                gap: "1.75rem",
            }}>
      {category.map((supp, index) => {
        if (index !== 0)
        return(
          <SplideSlide>
            <Linky to={`/searched/${supp.name}`}>
            <Card key={supp.id}>
              <h5>{supp.name}</h5>
              <p>{supp.quickSummary}</p>
            </Card>
            </Linky>
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

const Card = styled.div`
    margin: 1rem 0;
    width: 17rem;
    min-height: 22rem;
    max-height: 22rem;
    border-radius: 2rem;
    background: #fafaf8;
    padding: 2rem;
    overflow: auto;
    box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    -webkit-box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    -moz-box-shadow: 1px -1px 10px 2px rgba(252,173,35,0.75);
    -webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    p{
        margin-bottom: .5rem;
        color: #2B3F2B;
    }
`;

const Linky = styled(Link)`
    text-decoration: none;
`


export default CategorySupps