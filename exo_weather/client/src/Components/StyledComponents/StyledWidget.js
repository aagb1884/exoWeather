import styled from 'styled-components'

const StyledWidget = ({info}) => {

  const keyLabels = Object.keys(info)
  const spread = Object.values(info)

const widgetItems = spread.map((key) => {
   for (let valueKey in key){
    return <StyledWidgetWeatherData>~{valueKey}: {key[valueKey]}</StyledWidgetWeatherData>
  }
})

  return (

    <>
      <StyledWidgetWrapper>
        <StyledWidgetWeatherType >
        {keyLabels[0]}: 
        </StyledWidgetWeatherType>
          {widgetItems}
      </StyledWidgetWrapper>
    </>
  )
}

const StyledWidgetWrapper = styled.div`
    min-width: 250px;
    max-width: 250px;
    background-color: transparent;
    border: 3px solid #f8ab07;
    border-radius: 100px;
    padding: 5px;
    margin: 10px;
   	text-align: center;
`

const StyledWidgetWeatherType = styled.h2`
    font-size: 25px;
    color: white;
`

const StyledWidgetWeatherData = styled.h3`
    font-size: 25px;
    color: white;
`
export default StyledWidget;

