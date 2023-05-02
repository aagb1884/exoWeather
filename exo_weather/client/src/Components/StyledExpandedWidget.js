import React, { useState } from 'react';
import styled from 'styled-components';
import styledWidgetWrapper from 'StyledWidjets.js'

// const StyledWidgetWrapper = styled.div`
//   min-width: 250px;
//   max-width: 250px;
//   background-color: #F8F8F8;
//   border: 2px solid #f8ab07;
//   border-width: 5px;
//   border-radius: 5%;
//   padding: 1rem;
//   margin: 1rem;
//   text-align: center;
//   transition: all 0.3s ease;
// `;

const ExpandedWidgetWrapper = styled(styledWidgetWrapper)`
  max-width: ${({ isExpanded }) => (isExpanded ? '100%' : '250px')};
`;

const Widget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ExpandedWidgetWrapper isExpanded={isExpanded} onClick={handleClick}>
      {/* { weather data to go here} */}
      <h2>WEATHER DATA</h2>
    </ExpandedWidgetWrapper>
  );
};

export default Widget;
