import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import shadow from "style/shadow";

const Body = styled.div`
  ${shadow(1)}
  background-color:white;
  margin-top: 10px;
  height: auto;
  padding: 15px 10px 15px 10px;
  vertical-align: middle;
  overflow: auto;
  justify-content: space-between;
  display: flex;
`;


const Label = styled.label`
  position: relative;
  width:90%;
  padding: 0 0 0 25px;
  font-size: 1rem;
  cursor: pointer;

  input[type="checkbox"]{
    display: none;
  
    &:checked + span{
      opacity: 1;
    }
  }
  
  &::before{
    position: absolute;
    content: '';
    left: 0;
    height: 14px;
    width: 14px;
    border-radius: 2px;
    border: 2px solid #16A085;
    top: 50%;
    transform: translate(0%, -50%);
  }
  &::after{
    background-color:black;
  }

  span{
    position: absolute;
    left: -3px;
    width: 12px;
    height: 5px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg) translate(0%, -50%);
    opacity: 0;
    top: 50%;
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-left: 22px;

    &::before{
      position: absolute;
      content: '';
      left: 11px;
      width: 3px;
      height: 11px;
      background-color: #16A085;      
    }
    
    &::after{
      position: absolute;
      content: '';
      top: 8px;
      left: 7px;
      width: 4px;
      height: 3px;
      background-color: #16A085;
    }
}
  font-size: 1.2rem;
  text-decoration-line: ${props => (props.done ? "line-through" : "none")};
  word-break: break-all;
`;

const Delete = styled.button`
  position: relative;
  right:1px;
  border-width: 0;
  overflow: hidden;
  background-color: white;
  color: red;
  padding-right: 16px;
  &:active {
    transform: scale(0.9);
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Todo = ({ id, done, content, handleCheck, handleDelete }) => (
  <Body>
    <Label htmlFor={id} done={done}>
      <input type="checkbox" id={id} onChange={handleCheck} checked={done} />
      <span />
      {content}
    </Label>

    <Delete value={done} onClick={handleDelete} id={id}>
      <FontAwesomeIcon icon={faTrash} />
    </Delete>
  </Body>
);

export default Todo;
