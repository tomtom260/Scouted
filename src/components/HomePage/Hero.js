import React from "react"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import Button from "../Button/Button"

function Hero() {
  return (
    <Grid
      spacing={5}
      item
      container
      direction="column"
      justify="flex-end"
      xs={12}
    >
      <Grid item>
        <Typography variant="h1">dont get hired.</Typography>
        <Typography variant="h1">get scouted.</Typography>
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

export default Hero
