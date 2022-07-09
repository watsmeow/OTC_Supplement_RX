import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import { FaSearch } from 'react-icons/fa';

function Searched() {

    const [searchedSupplement, setSearchedSupplement] = useState({});
    const [input, setInput] = useState("");
    const amazonSearchLink = `http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=${searchedSupplement.id}`

    const submitHandler = (e) => {
        e.preventDefault();
    };

    let params = useParams();

    const getSupplement = async (searchedSupp) => {

        const check = sessionStorage.getItem('searchedSupplement');

        if (check) {
            setSearchedSupplement(JSON.parse(check));
        } else {
            const data = await fetch(`https://supplements.p.rapidapi.com/SupplementDetails/?supplementID=${searchedSupp}`, {
                headers: new Headers({
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                }),
            });
            const supps = await data.json();
    
            sessionStorage.setItem('searchedSupplement', JSON.stringify(supps))
            setSearchedSupplement(supps)
            console.log(supps)
        }
    };

    useEffect(() => {
        getSupplement(params.search)
    },[params.search]);


  return (
    <div>
    <Wrapper>
        <h2>{searchedSupplement.id}</h2>
        <p>{searchedSupplement.quickSummary}</p>
        <FormStyle onSubmit={submitHandler}>
        <h3>Search {searchedSupplement.id}'s effectiveness for:</h3>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => {console.log(e); setInput(e.target.value.toLowerCase())}} 
            type="text"  />
        </FormStyle>
        <h4>There is a high level of supporting evidence that {searchedSupplement.id} has the following effects:</h4>
        <Splide options={{
            perPage: 3,
            pagination: false,
            drag: "free",
            gap: "3rem",
        }}>
            {searchedSupplement.effects?.filter((effect) => {
                return effect.outcome.id.toLowerCase().includes(input)
                    || effect.outcome.name.toLowerCase().includes(input)})
                .map((effect) => {
                    return (
                        <SplideSlide>
                            <Card key={effect.outcome.id}>
                                <h4>{effect.outcome.name}</h4>
                                <h5>Effect Direction: </h5><p>{effect.measurement.effectDirection}</p>
                                <h5>Magnitude: </h5><p>{effect.measurement.effectMagnitude}</p>
                                <p>{effect.notes}</p>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
            <Button>
                <div>
                    <a href={amazonSearchLink}>Purchase {searchedSupplement.id}</a>
                </div>
            </Button>
        </Wrapper>
    </div>
  );
}

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        border: none;
        background: lightgray;
        font-size: 1rem;
        padding: 1rem 1rem;
        border-radius: 1rem;
        outline: none;
        width: 30%;
        text-align: center;
        margin-top: 2rem;
    }
    a {
        text-decoration: none;
        color: black;
    }
`

const Wrapper = styled.div`
    margin: 4rem 0rem;
    p{
        margin-bottom: 2rem;
    }
`
const FormStyle = styled.form`
    margin: 0rem auto;
    position: relative;
    width: 50%;
    input{
        border: none;
        background: lightgray;
        font-size: 1.5rem;
        padding: 1rem 4rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        margin-bottom: 2rem;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translate(100%, -%50);
        color: black;
        font-size: 1.5rem;
    }
`
const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
    width: 24rem;
    min-height: 27rem;
    border-radius: 2rem;
    background: yellow;
    padding: 2rem;
    overflow: hidden;

    p{
        margin-bottom: .5rem
    }
`





export default Searched


/*

            {searchedSupplement.effects?.filter((effect) => {
                if (effect.outcome.id.toLowerCase() == JSON.stringify(input) || effect.outcome.name.toLowerCase() == JSON.stringify(input)) {

                    return (
                        <SplideSlide>
                            <Card key={effect.outcome.id}>
                                <h4>{effect.outcome.name}</h4>
                                <h5>Effect Direction: </h5><p>{effect.measurement.effectDirection}</p>
                                <h5>Magnitude: </h5><p>{effect.measurement.effectMagnitude}</p>
                                <p>{effect.notes}</p>
                            </Card>
                        </SplideSlide>
                    )
                }
                    return null;
                })}
                */