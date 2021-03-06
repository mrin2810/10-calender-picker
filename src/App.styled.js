import styled from "styled-components";
import { css } from "styled-components";

export const StyledDateChooser = styled.div`
display: flex;
margin-bottom: 20px;
`;

export const StyledDateChooserButton = styled.button`
color: #0b204c;
text-transform: uppercase;
flex: 1;
padding: 15px;
background: none;
cursor: pointer;
border: none;
border-bottom: 4px solid rgba(11, 32, 76, 0.2);
outline: none;
span {
  display: block;
  min-height: 60px;
  font-size: 50px;
}
border-color: ${props => (props.isChoosing ? '#0b204c' : 'none')};
`;

export const StyledCalender = styled.div`
max-width: 400px;
border-radius: 10px;
display: grid;
grid-template-columns: repeat(7, 1fr);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
background: #0b204c;
color: #fff;
padding: 20px;
`;

export const StyledCalenderDay = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
transition: 0.3s ease background;
border: none;
outline: none;
cursor: pointer;
color: #8096c1;
background: none;

${props => 
    props.isSelected && css`
    background-color: #010f2e;
    color: #eee;
  `
}}

${props => 
    props.isInRange && css`
    background-color: #1d3a79;
    color: #eee;
  `
}}

&:hover {
  color: #eee;
  background: #1d4b89;
}

`;
