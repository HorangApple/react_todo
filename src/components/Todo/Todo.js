import React, {Component} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import shadow from 'style/shadow'

const Body = styled.div`
  ${shadow(1)}
  background-color:white;
  margin-top: 10px;
  height: 2rem;
  padding: 10px 10px 10px 10px;
  vertical-align:middle;
  overflow:auto;
`

const CheckBox = styled.input`
  position: relative;
  top: 0.1rem;
  margin-top:0.6rem;
`

const Label = styled.label`
  font-size: 1.2rem;
`

const Delete = styled.button`
  outline: none;
  border-width: 0;
  overflow: hidden;
  background-color:white;
  color: red;
  &:active {
    transform: scale(0.90);
    color: black;
  }
`

const Todo = () =>(
  <Body>
    <CheckBox type="checkbox" id="k"/><Label for="k">쿨쿨잠 자고 싶다, 쿨쿨</Label><Delete><FontAwesomeIcon icon={faTrash} /></Delete>
  </Body>
)

export default Todo