import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';





export const Container = styled.section`
display: flex;
flex-direction: column;
min-height: 420px;
background-color: #ffff00;
border-radius: 5px;
box-sizing: border-box;
width: 100%;
margin: auto;
max-width: 450px;
padding: 10px;
 
`;

export const Text = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #333333;;
    font-size: 55px;
    font-weight: 800;
`;
export const Input = styled.input`
    background: #f2f2f2
    ;
    border-radius: 4px;
    border: 0;
    color:rgba(0, 0, 0, 0.75);
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    
    &:last-of-type {
        margin-bottom: 30px;
    }
`;
export const Submit = styled.button`
    background:#333333;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    
    &:disabled {
        opacity: 0.5;
    }
`;
export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;