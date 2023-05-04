import styled from 'styled-components';

const About = () => {
    return ( 
    <>
    <CenteredDiv>
        <h1>We're a team of 4 CodeClan Students who like space.</h1>
        <h3>Concept</h3>
<p>
We wanted to use NASA’s API to get weather data from Mars (!) and then compare it with locations here on Earth using a secondary Weather API.
</p>

<h3> Key Learning Objectives </h3>

<p>It was important to us that we pushed ourselves and learned new things. As such, we set ourselves the following learning objectives;</p>

<ul>
<li>Git/GitHub</li>
<li>React (all of it!) but specifically; API calls, Styled Components and the React Router DOM.</li>
<li>Express</li>
<li>MongoDB</li>
<li>JS </li>
<li>Trello</li>
<li>Teamwork and communication</li>
</ul>

<p>We hope you enjoy the app!</p>
        
</CenteredDiv>
    </>

     );
}
 
const CenteredDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: yellow;
  min-height: 100vh;
  font-size: 20px;

  ul {
    text-align: left;
    padding-left: 0;
    list-style-position: inside;
  }

  li {
    margin-bottom: 10px;
  }
`;





export default About;