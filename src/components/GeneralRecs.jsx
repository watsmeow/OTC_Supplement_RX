import { useEffect, useState } from 'react';
import { supplementList } from '../data';
import styled from 'styled-components';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const GeneralRecs = () => {

    const [suppOfTheDay, setSuppOfTheDay] = useState({})
    const amazonSearchLink = `http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=${suppOfTheDay.id}`

    useEffect(() => {
        getGeneral();
    },[])

    let randomIndex = function() {
        let listLength = supplementList.length
        return Math.floor(Math.random() * listLength)
    }

    let randomSupplement = supplementList[randomIndex()]

    const getGeneral = async () => {

        const check = localStorage.getItem('suppOfTheDay');

        if (check) {
            setSuppOfTheDay(JSON.parse(check));
        } else {
            const api = await fetch(`https://supplements.p.rapidapi.com/SupplementDetails/?supplementID=${randomSupplement}`, {
                headers: new Headers({
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                }),
            });
            const data = await api.json();

            localStorage.setItem('suppOfTheDay', JSON.stringify(data));
            setSuppOfTheDay(data)
            console.log(data)
        }
    };

    return ( 
        <div>
        <Wrapper>
            <h2>{suppOfTheDay.id}</h2>
            <h3>Effects with a high level of supporting evidence:</h3>
            <Splide options={{
                perPage: 3,
                pagination: false,
                drag: "free",
                gap: "2rem",
            }}>
                {suppOfTheDay.effects?.map((effect) => {
                    if (effect.levelOfEvidence === "High" || effect.levelOfEvidence === "Medium") 
                        return (
                            <SplideSlide>
                                <Card key={effect.outcome.id}>
                                    <h4>{effect.outcome.name}</h4>
                                    <h5>Effect Direction: </h5><p>{effect.measurement.effectDirection}</p>
                                    <h5>Magnitude: </h5><p>{effect.measurement.effectMagnitude}</p>
                                    <p>{effect.notes}</p>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
                <Button>
                    <div>
                        <a href={amazonSearchLink}><h5>Purchase {suppOfTheDay.id}</h5></a>
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
        padding: 1rem;
        border-radius: 1rem;
        outline: none;
        width: 30%;
        text-align: center;
        margin-top: 2rem;
    }
    a {
        text-decoration: none;
        color: black;
        margin-bottom: 0;
    }
    h5 {
        text-transform: uppercase;
    }
`

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    width: 23rem;
    min-height: 27rem;
    border: solid black 2px;
    background: #fafaf8;
    border-radius: 2rem;
    padding: 2rem 1.5rem;
    margin: 2rem 0;
    overflow: hidden;
    box-shadow: 10px -1px 17px 1px rgba(74,74,74,0.99);
    -webkit-box-shadow: 10px -1px 17px 1px rgba(74,74,74,0.99);
    -moz-box-shadow: 10px -1px 17px 1px rgba(74,74,74,0.99);
    p{
        margin-bottom: .5rem;
    }
`;

export default GeneralRecs