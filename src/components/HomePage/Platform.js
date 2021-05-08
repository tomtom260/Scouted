import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import penguin from "../../assets/Group-48.svg"
import penguinDark from "../../assets/Group-8.svg"
import { Hidden } from "@material-ui/core"
import jacqueline from "../../assets/jacqueline-loeb.jpg"
import mark from "../../assets/mark-weyland.jpg"
import ela from "../../assets/ela-mitchell.jpg"
import cynthia from "../../assets/cynthia-madu.jpg"
import michelle from "../../assets/michelle-manket.jpg"
import nicole from "../../assets/nicole-sanfilippo.jpg"
import bridget from "../../assets/bridget-murdoch.jpg"
import sarah from "../../assets/sarah-schultz.jpg"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    // ...theme.typography.sectionContainer,
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "8.6rem 1.5rem 7.6rem 1.5rem",
    alignItems: "flex-end",
    "& > div:first-child": {},
  },
  scoutsContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  imagesContainer: {
    maxWidth: "74rem",
    height: "54rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      width: "100%",
    },
  },
  cynthia: {
    width: "3.2rem",
    height: "3.2rem",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  jacqueline: {
    width: "19.4rem",
    height: "19.4rem",
    borderRadius: "50%",
    position: "absolute",
    left: "33.9rem",
    [theme.breakpoints.down("sm")]: {
      width: "10.5rem",
      height: "10.5rem",
      position: "static",
      margin: "0 auto",
    },
  },
  mark: {
    width: "6.2rem",
    height: "6.2rem",
    borderRadius: "50%",
    position: "absolute",
    top: "9.7rem",
    left: "11rem",
    [theme.breakpoints.down("sm")]: {
      top: "22rem",
      left: 0,
    },
  },
  ela: {
    width: "11.5rem",
    height: "11.5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "23rem",
    right: 0,
    [theme.breakpoints.down("sm")]: {
      width: "7.6rem",
      height: "7.6rem",
      right: "0",
    },
  },
  michelle: {
    position: "absolute",
    top: "31rem",
    left: "33.9rem",
    width: "6.2rem",
    height: "6.2rem",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      bottom: "5rem",
      left: "45%",
    },
  },
  sarah: {
    position: "absolute",
    bottom: "5.5rem",
    right: "3rem",
    width: "3.2rem",
    height: "3.2rem",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bridget: {
    width: "3.2rem",
    height: "3.2rem",
    borderRadius: "50%",
    position: "absolute",
    bottom: "9rem",
    left: "22rem",
    [theme.breakpoints.down("sm")]: {
      bottom: 0,
      left: "5rem",
    },
  },
  nicole: {
    width: "6.2rem",
    height: "6.2rem",
    borderRadius: "50%",
    position: "absolute",
    bottom: "2rem",
    right: "16rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

function Platform() {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.sectionContainer}>
      <Grid className={classes.imagesContainer} item container>
        <img className={classes.cynthia} src={cynthia} alt="cynthia-madu" />
        <img
          className={classes.jacqueline}
          src={jacqueline}
          alt="jacqueline-loeb"
        />
        <img className={classes.mark} src={mark} alt="mark-weyland" />
        <img className={classes.ela} src={ela} alt="ela-mitchell" />
        <img
          className={classes.michelle}
          src={michelle}
          alt="michelle-manket"
        />
        <img className={classes.sarah} src={sarah} alt="sarah-schultz" />
        <img className={classes.bridget} src={bridget} alt="bridget-murdoh" />
        <img className={classes.nicole} src={nicole} alt="nicole-sanfillippo" />
      </Grid>
      <Grid
        className={classes.scoutsContainer}
        container
        wrap="nowrap"
        justify="space-between"
      >
        <Grid direction="column" item container xs={12} sm={8}>
          <Grid item>
            <Typography variant="h2">
              Scouted is the job matching platform that works for you
            </Typography>
          </Grid>
          {/* <Grid item xs={10} md={8} lg={6}> */}
          <Grid item xs={9}>
            <Typography variant="body1">
              Meet our Scouts. They are here to be your advocate and coach as
              you apply for the opportunities that interest you. They’ll also
              suggest great jobs you may have overlooked.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Hidden smUp>
            <img
              style={{ position: "relative", left: "-7rem" }}
              src={penguinDark}
              alt="penguin"
            />
          </Hidden>
          <Hidden xsDown>
            <img src={penguin} alt="penguin" />
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Platform
