import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  messageContainer: {
    backgroundColor: "#9ED6D4",
    minHeight: "5.7rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1.5rem",
  },
  message: {
    overflowWrap: "break-word",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))
function Message() {
  const classes = useStyles()
  return (
    <div className={classes.messageContainer}>
      <Typography variant="body1" className={classes.message}>
        Scouted joins Recruiter.com to create an industry-leading recruiting
        experience
      </Typography>
    </div>
  )
}

export default Message
