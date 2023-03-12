import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color:rgb(18,21,24);
`

export const CardBox = styled.div`
    width: 28vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    position:absolute ;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:red;
    border-radius: 30px;
    padding: 30px;
    background-color:rgb(56,65,82);
    box-shadow: 3px 3px #111828;
`
export const InputText = styled.input`

    width: 100%;
    // height: 100%;
    margin-bottom:7px;
    font-size: 16px;
    color: #ffff;
    border: none;
    outline: none;
    background-color:rgb(17,24,40)
`

export const TaskBar = styled.div`
    // width:100%;
    height:35px;
    display:flex;
    flex-direction:row;
    text-align:center;
    border-radius:14px;
    margin-bottom:5px;
    padding: 10px 15px 0;
    background-color:rgb(17,24,40);
    justify-content: space-between;
    cursor:pointer;
    color:white;
    box-shadow: 3px 3px rgb(18,21,24);
    &:hover {
        height:38px;
        opacity:0.95;
      }
    transition-duration:0.1s;

    font-size:1rem;
`

export const ButtonBox = styled.div`
    display:flex;
`

export const ButtonCustom = styled.button`
   border:none;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   padding-bottom: 10px;
   padding-right: 5px;
   font-size: 0.9rem;
   color:white;
   &:hover {
    font-size: 1rem;
  }
  transition-duration:0.2s;
`
