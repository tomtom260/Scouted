import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Typography } from "@material-ui/core"
import Button from "../Button/Button"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "8.6rem 1.5rem 7.6rem 1.5rem",
  },
  gridSpacing: {
    ...theme.typography.gridSpacing,
  },
  CTA: {
    ...theme.typography.button,
  },
}))

function Hero() {
  const classes = useStyles()
  return (
    <Grid
      spacing={5}
      item
      container
      direction="column"
      justify="flex-end"
      xs={12}
      classes={{ "spacing-xs-5": classes.gridSpacing }}
      className={classes.sectionContainer}
    >
      <Grid item>
        <Typography variant="h1">
          Dont get hired.
          <br />
          Get scouted.
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="body1">
          We match aspiring candidates with inspiring companies. Get hired for
          your abilities and potential, not just your resume.
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.CTA} size="large">
          Get Started
        </Button>
      </Grid>
    </Grid>
  )
}

export default Hero
