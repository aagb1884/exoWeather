import styled from 'styled-components'

const styledWidgetWrapper = styled.div`
    min-width: 250px;
    max-width: 250px;
    background-color: #F8F8F8;
    border: 2px solid #f8ab07;
    border-width: 5px;
    border-radius: 5%;
    padding: 1rem;
    margin: 1 rem;
   	text-align: center;
`

const styledWidgetWeatherType = styled.h2`
    font: robotto;
    font-size: 16px;
    color: white;
`

const styledWidgetWeatherData = styled.h1`
font: robotto;
    font-size: 10px;
    color: white;
`
export {styledWidgetWrapper, styledWidgetWeatherType, styledWidgetWeatherData}

