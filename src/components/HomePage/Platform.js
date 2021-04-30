import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

function Platform() {
  return (
    <Grid container direction="column" spacing={3}>
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
