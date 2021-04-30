import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

function HighTech() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">high text,human touch</Typography>
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
