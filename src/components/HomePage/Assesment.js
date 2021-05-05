import { Grid, Typography } from "@material-ui/core"
import React from "react"
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

function Assesment() {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h1">
          you +<br />
          operations associate=
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">scouted's assesment</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Okay match</Typography>
      </Grid>
    </Grid>
  )
}

export default Assesment
