import React from "react"
import ButtonMui from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  getStarted: {
    ...theme.typography.button,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    display: "none",
  },
}))

function Button(props) {
  const classes = useStyles()
  console.log(props)
  return (
    <ButtonMui
      className={props.getStarted ? classes.getStarted : null}
      {...props}
    />
  )
}

Button.defaultProps = {
  color: "secondary",
  variant: "contained",
  size: "medium",
  disableRipple: true,
}

export default Button
