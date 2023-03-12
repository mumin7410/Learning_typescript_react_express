import styled from "styled-components";


export const BG = styled.div`
    width: 30.8vw;
    height: 5vh;
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    position:absolute ;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const InputBar = styled.input`
    height: 100%;
    width: 26vw;
    background-color:rgb(56,65,82);
    border-radius: 14px;
    outline: none;
    border: none;
    margin-right:10px;
    color:white;
    font-size:15px;
    padding-left:17px;
    box-shadow: 3px 3px #111828;
`

export const AddButton = styled.button`
    width: 6vw;
    cursor: pointer;
    border-radius: 8px;
    background-color:rgb(17,24,40);
    color:white;
    border: none;
    box-shadow: 3px 3px #111828;
    font-size:0.9rem;
    &:hover {
        width: 6.5vw;
        height: 5.5vh;
        opacity: 0.9;
      }
    transition-duration:0.1s;
`