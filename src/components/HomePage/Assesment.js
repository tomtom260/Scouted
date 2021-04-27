import { Grid, Typography } from "@material-ui/core"
import React from "react"

function Assesment() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h1">you +</Typography>
        <Typography variant="h1">operations associate=</Typography>
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
