import React from "react"
import ButtonMui from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  getStarted: {
    ...theme.typography.button,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    padding: "0 2.4rem",
    height: "3.8rem",
    boxSizing: "content-box",
    width: "7.8rem",
    display: "none",
    fontSize: "1.3rem",
  },
  text: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))

function Button(props) {
  const classes = useStyles()
  return (
    <ButtonMui
      classes={{ text: classes.text }}
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
