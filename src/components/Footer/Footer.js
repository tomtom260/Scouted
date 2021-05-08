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
    "& > div:not(:last-child)": {
      // marginRight: "9rem",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "& > div:not(:last-child)": {
        marginRight: "0rem",
        marginBottom: "4.8rem",
      },
    },
  },
  footerColumn: {
    ...theme.typography.footerColumn,
    "& > div:not(:last-child)": {
      marginBottom: "1.6rem",
    },
    "& h3": {
      [theme.breakpoints.up("md")]: {
        width: "min-content",
        whiteSpace: "break-spaces",
      },
    },
  },
  scoutedText: {
    [theme.breakpoints.up("md")]: {
      width: "23rem",
    },
  },
  footerContainer: {
    backgroundColor: "#363636",
    color: "#ffffff",
    padding: "9.4rem 0 6rem 0",
  },
  iconContainer: {
    padding: "0",
    margin: "0 1rem",
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
            <Typography variant="body1">sign up</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">candidates</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">employer</Typography>
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
            <Typography variant="body1">About Us</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Blog</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">FAQ</Typography>
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
            <Typography variant="body1">Terms</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">privacy</Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.footerColumn}
          direction="column"
          container
          item
        >
          <Grid className={classes.scoutedText} item>
            <Typography variant="body1">
              Scouted, a Recruiter.com Company
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.footerColumn} direction="row" container item>
          <Grid item>
            <IconButton className={classes.iconContainer}>
              <FacebookIcon color="primary" fontSize="large" />
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
