import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Logos from "../../assets/Logos2.png"

const useStyles = makeStyles(theme => ({
  social: {
    ...theme.typography.header,
  },
  logosContainer: {
    "& img": {
      width: "55.5rem",
    },
  },
  socialText: {
    width: "80%",
  },
  socialCaption: {
    textAlign: "center",
    marginTop: "2rem",
  },
  socialContainer: {
    backgroundColor: "#363636",
    color: "#ffffff",
    padding: "9.4rem 0 6rem 0",
  },
}))

function SocialProof() {
  const classes = useStyles()
  return (
    <Box className={classes.socialContainer}>
      <Grid
        className={classes.social}
        container
        direction="row"
        //   spacing={3}
      >
        <Grid item container direction="column" spacing={2} xs={12} lg={6}>
          <Grid item>
            <Typography variant="h2">
              Aspiring candidates,
              <br />
              inspiring companies
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.socialText} variant="body1">
              Whether a Fortune 500, a start-up, or somewhere in between,
              companies use us to find super-smart, analytical talent with 0-15
              years of experience in non-technical business roles.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <span className={classes.logosContainer}>
            <img src={Logos} alt="logos" />
          </span>
          <Grid item className={classes.socialCaption}>
            <Typography color="textSecondary" variant="body1">
              And 100's more
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SocialProof
