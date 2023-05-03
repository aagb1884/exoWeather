import StyledWidget from "../StyledComponents/StyledWidget";

const SummaryInfo = ({_id, planet, location, data}) => {
  
  // console.log(`SummaryInfo: ${planet}`)
  // console.log(`SummaryInfo: ${data}`)

  const widgetInfo = planet.data[0].map((info, index) => {
    return <StyledWidget key={index} info={info}/>
  })
  console.log(widgetInfo)

  return ( 
      <>
      {widgetInfo}
      </>
   );
}

export default SummaryInfo;