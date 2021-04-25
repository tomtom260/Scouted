import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  color: ${({ color }) => color};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 40px;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
`

function Button({ variant = "primary", children, ...rest }) {
  let bgColor
  const color = variant === "secondary" ? "#000000" : "#FFFFFF"
  switch (variant) {
    default:
    case "primary":
      bgColor = "#008CBA"
      break
    case "secondary":
      bgColor = "#e7e7e7"
      break
    case "success":
      bgColor = "#4CAF50"
      break
    case "danger":
      bgColor = "#f44336"
  }
  return (
    <StyledButton color={color} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
