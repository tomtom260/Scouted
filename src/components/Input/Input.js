import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  display: block;
  width: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid;
  border-color: inherit;
  background-color: #fff;
  font-size: ${({ fontsize }) => fontsize};
  height: ${({ height }) => height};
`

function Input({ size, ...rest }) {
  let fontsize, height
  switch (size) {
    case "small":
      fontsize = "0.875rem"
      height = "2rem"
      break
    default:
    case "medium":
      fontsize = "1rem"
      height = "2.5rem"
      break
    case "large":
      fontsize = "1.25rem"
      height = "3rem"
  }

  return (
    <StyledInput
      {...rest}
      placeholder={`${size} input`}
      fontsize={fontsize}
      height={height}
    />
  )
}

export default Input
