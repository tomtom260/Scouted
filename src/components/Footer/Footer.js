import {
  Grid,
  makeStyles,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core"
import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles(theme => ({
  footer: {
    ...theme.typography.header,
  },
  footerColumn: {
    ...theme.typography.footerColumn,
  },
  footerContainer: {
    backgroundColor: "#363636",
    color: "#ffffff",
  },
  iconContainer: {
    borderRadius: "2rem",
    // backgroundColor: "white",
  },
  icon: {
    // padding: "3rem",
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <Box className={classes.footerContainer}>
      <Grid
        xs={12}
        md={10}
        xl={6}
        justify="space-between"
        container
        direction="row"
        className={classes.footer}
      >
        <Grid
          className={classes.footerColumn}
          direction="column"
          container
          item
        >
          <Grid item>
            <Typography variant="h3">Get Started</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">sign up</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">candidates</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">employer</Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.footerColumn}
          direction="column"
          container
          item
        >
          <Grid item>
            <Typography variant="h3">Learn More</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">About Us</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Blog</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">FAQ</Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.footerColumn}
          direction="column"
          container
          item
        >
          <Grid item>
            <Typography variant="h3">Legal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Terms</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">privacy</Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.footerColumn}
          direction="column"
          container
          item
        >
          <Grid item>
            <Typography variant="body2">
              Scouted, a Recruiter.com Company
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.footerColumn} direction="row" container item>
          <Grid item>
            <IconButton className={classes.iconContainer}>
              <FacebookIcon
                color="primary"
                className={classes.icon}
                fontSize="large"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" className={classes.iconContainer}>
              <LinkedInIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" className={classes.iconContainer}>
              <TwitterIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" className={classes.iconContainer}>
              <InstagramIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" className={classes.iconContainer}>
              <MailIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
