import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Typography } from "@material-ui/core"
import Button from "./Button/Button"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    transform: "translateY(9rem)",
    padding: "0 1.5rem",
    margin: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      margin: "0 1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 auto",
      maxWidth: "70rem",
    },
  },
}))

function Section() {
  const classes = useStyles()
  return (
    <Grid
      spacing={5}
      item
      container
      direction="column"
      justify="flex-end"
      xs={12}
      className={classes.sectionContainer}
    >
      <Grid item>
        <Typography variant="h1">
          dont get hired.
          <br />
          get scouted.
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="body1">
          We match aspiring candidates with inspiring companies. Get hired for
          your abilities and potential, not just your resume.
        </Typography>
      </Grid>
      <Grid item>
        <Button getStarted size="large">
          Get Started
        </Button>
      </Grid>
    </Grid>
  )
}

export default Section
