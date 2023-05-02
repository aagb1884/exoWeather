import styled from 'styled-components'

const StyledWidget = ({info}) => {
// const StyledWidget = ({avg, min, max}) => {
  console.log(`Widget: ${Object.keys(info)}`)
  const keyLabel = Object.keys(info)

  return (

    <>
      <StyledWidgetWrapper>
        <StyledWidgetWeatherType >
        {keyLabel}
        </StyledWidgetWeatherType>
          <StyledWidgetWeatherData>
          {info.avg}
          </StyledWidgetWeatherData>
      </StyledWidgetWrapper>
    </>
  )
}

const StyledWidgetWrapper = styled.div`
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

const StyledWidgetWeatherType = styled.h2`
    font: robotto;
    font-size: 16px;
    color: black;
`

const StyledWidgetWeatherData = styled.h3`
font: robotto;
    font-size: 10px;
    color: black;
`
export default StyledWidget;

