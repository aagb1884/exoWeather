import StyledWidget from "../StyledComponents/StyledWidget";
import styled from "styled-components";

const SummaryInfo = ({_id, planet, location, data}) => {
  
  // console.log(`SummaryInfo: ${planet}`)
  // console.log(`SummaryInfo: ${data}`)

  const widgetInfo = planet.data[0].map((info, index) => {
    return <StyledWidget key={index} info={info}/>
  })
  console.log(widgetInfo)

  return ( 
          <WidgetWrapper>
            {widgetInfo}
          </WidgetWrapper>
   );
}

const WidgetWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 25px;
  overflow-x: auto;
  border: solid 3px;
  border-radius: 100px;
  color: #f8ab07;
`;

export default SummaryInfo;