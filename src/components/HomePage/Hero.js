import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Typography } from "@material-ui/core"
import Button from "../Button/Button"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "9.5rem 1.5rem 12rem 1.5rem",
    "& > div": {
      padding: "3rem 0 !important",
    },
  },
  CTA: {
    ...theme.typography.button,
    width: "15rem",
    height: "5.4rem",
    fontSize: "16px",
    fontWeight: 700,
    // boxSizing:"content-box",
  },
}))

function Hero() {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      direction="column"
      justify="flex-end"
      xs={12}
      className={classes.sectionContainer}
    >
      <Grid item>
        <Typography variant="h1">
          Dont get hired.
          <br />
          Get scouted.
        </Typography>
      </Grid>
      <Grid item style={{ maxWidth: "52.8rem" }}>
        <Typography variant="body1">
          We match aspiring candidates with inspiring companies. Get hired for
          your abilities and potential, not just your resume.
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.CTA} size="large">
          Get started
        </Button>
      </Grid>
    </Grid>
  )
}

export default Hero
