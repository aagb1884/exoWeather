import styled from 'styled-components'

const StyledWidget = ({info}) => {

  const keyLabels = Object.keys(info)
  const spread = Object.values(info)
// const StyledWidget = ({avg, min, max}) => {
  // console.log(`Widget1: ${Object.keys(info)}`)
  // console.log(`Widget2: ${typeof keyLabel[0]}`)
  console.log(`Widget3: ${clientInformation}`)
  // // console.log(`Widget4: ${info.avg}`)
  // console.log(`Widget5: ${spread[1]}`)
  // console.log(`Widget5: ${spread}`)

const widgetItems = spread.map((key) => {
   for (let valueKey in key){
    return <StyledWidgetWeatherData>~{valueKey}: {key[valueKey]}</StyledWidgetWeatherData>
  }
})

// for (let key of spread){
//     for (let valueKey in key){
//       console.log(key[valueKey])
//     }
// }

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
    background-color: #F8F8F8;
    border: 2px solid #f8ab07;
    border-width: 5px;
    border-radius: 5%;
    padding: 1rem;
    margin: 5px;
   	text-align: center;
`

const StyledWidgetWeatherType = styled.h2`
    font: robotto;
    font-size: 25px;
    color: black;
`

const StyledWidgetWeatherData = styled.h3`
font: robotto;
    font-size: 18px;
    color: black;
`
export default StyledWidget;

