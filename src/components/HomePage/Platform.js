import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.sectionContainer,
  },
  gridSpacing: {
    ...theme.typography.gridSpacing,
  },
  CTA: {
    ...theme.typography.button,
  },
}))

function Platform() {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h2">
          Scouted is the job matching platform that works for you
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="body1">
          Meet our Scouts. They are here to be your advocate and coach as you
          apply for the opportunities that interest you. They’ll also suggest
          great jobs you may have overlooked.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Platform
