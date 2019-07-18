import React from 'react'
import styled from 'styled-components';

import CircleButton from 'components/CircleButton'

const Input = styled.input`
  font-size: 1.2rem;
  width: 20rem;
  margin-right: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-width: 0;
  background-color:transparent;
  border-bottom: 2px solid black;
  :focus{
    outline: none;
  }
`

const Body = styled.div`
  display:flex;
  justify-content:center;
`

const TodoInput = ({content, handleInput, handleClick}) => {
  return (
    <Body>
      <Input value={content} onChange={handleInput}/>
      <CircleButton type="submit" handleClick={handleClick}></CircleButton>
    </Body>
  )
}

export default TodoInput