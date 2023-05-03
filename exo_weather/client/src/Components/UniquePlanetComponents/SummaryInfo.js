import StyledWidget from "../StyledComponents/StyledWidget";

const SummaryInfo = ({_id, planet, location, data}) => {
  
  console.log(`SummaryInfo: ${planet}`)
  console.log(`SummaryInfo2: ${data}`)

  const widgetInfo = planet.data[0].map((info, index) => {
    return <StyledWidget key={index} info={{...info}}/>
  })
  
  return ( 
      <>
      <h3>Summary Info</h3>
      {widgetInfo}
      </>
   );
}

export default SummaryInfo;