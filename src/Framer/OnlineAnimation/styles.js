import styled from 'styled-components';

export const OnlineContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const OnlineCircle = styled.span`
font-size: 3em;
width: 6px;
height: 6px;
position: absolute;
right: 60px;
bottom: 10px;
box-shadow: 0 0 3px green, 0 1px 6px white ;
border-radius: 50%;
color: green;
background-color: green;
`;