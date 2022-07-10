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


            const data = await fetch(`https://supplements.p.rapidapi.com/SupplementDetails/?supplementID=${searchedSupp}`, {
                headers: new Headers({
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                }),
            });
            const supps = await data.json();
    

            setSearchedSupplement(supps)

        
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
        <Splide options={{
            perPage: 3,
            breakpoints: {
                900: {
                    perPage: 1,
                },
            },
            pagination: false,
            drag: "free",
            gap: "2rem",
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
                    <a href={amazonSearchLink}><h5>Purchase {searchedSupplement.id}</h5></a>
                </div>
            </Button>
        </Wrapper>
    </div>
  );
}



const Wrapper = styled.div`
    margin: 4rem 0rem;
    p{
        margin-bottom: 2rem;
    }
`
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
        width: 50%;
        margin-bottom: 1rem;
        box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -webkit-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -moz-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    }
    svg{
        position: absolute;
        top: 55%;
        left: 27%;
        transform: translate(100%, -%50);
        color: black;
        font-size: 1.5rem;
    }
`
const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        border: none;
        background: #091903;
        font-size: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        outline: none;
        min-width: fit-content;
        text-align: center;
        margin-top: 2rem;
        box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -webkit-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
        -moz-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    }
    a {
        text-decoration: none;
        margin-bottom: 0;
        color: #fafaf8;
    }
    h5 {
        text-transform: uppercase;
        color: #fafaf8;
    }
`
const Card = styled.div`
    width: 22rem;
    min-height: 25rem;
    border: solid #091903 2px;
    background: #fafaf8;
    border-radius: 2rem;
    padding: 2rem 1.25rem;
    margin: 1.5rem 0;
    overflow: hidden;
    box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    -webkit-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    -moz-box-shadow: 1px -1px 10px 2px rgba(74,74,74,0.54);
    p{
        margin-bottom: .5rem;
        color: #2B3F2B;
    }
`;




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