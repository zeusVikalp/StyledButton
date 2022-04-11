import React from "react";
import styled from "styled-components"

const Button = styled.button`
border:none;
background-color: transparent;
border-radius: 5px;
cursor: pointer;
margin-left: 5px;
margin-right: 5px;
padding: 10px;
background-color: black;
color:white;

&:hover{
    background-color: white;
    color:black;
    border :1px solid black;


}
`

export { Button }