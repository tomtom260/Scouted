import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

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

function HighTech() {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h2">High Tech,Human Touch</Typography>
      </Grid>
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="body1">
          Using our ever-learning AI technology and the expertise of our talent
          team, Scouted helps early to mid-career candidates land the right job.
          The more we get to know you, the smarter we get
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HighTech
