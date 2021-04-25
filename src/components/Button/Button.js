import React from "react"
import ButtonMui from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  primaryButton: props => {
    return {
      textTransform: "capitalize",
      borderRadius: "2.5rem",
      letterSpacing: "1px",
      padding: "0.5rem 2rem",
    }
  },
}))

function Button(props) {
  const classes = useStyles()
  return <ButtonMui className={classes.primaryButton} {...props} />
}

Button.defaultProps = {
  color: "secondary",
  variant: "contained",
  size: "medium",
  disableRipple: true,
}

export default Button
