import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { Hidden, Typography } from "@material-ui/core"
import Dash from "./Dash"
import Button from "../Button/Button"
import penguin from "../../assets/penguein-purple-dark.svg"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "8.6rem 0 7.6rem 0",
    boxSizing: "content-box",
  },
  button: {
    ...theme.typography.button,
    borderWidth: "2px",
    height: "5.2rem",
    width: "12.2rem",
  },
}))

function Introductions({ children: items }) {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
      align="flex-start"
    >
      <Grid item>
        <Typography variant="body1">
          <strong>
            Helping super-smart generalists land coveted business opportunities.
          </strong>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">
          Being <Dash words={["creative", "analytical", "personable"]} />
          <span style={{ whiteSpace: "nowrap" }}>is my biggest strength</span>.
        </Typography>
        <Typography variant="h2">
          I am looking to{" "}
          <Dash
            words={["change careers", "advance my career", "start my career"]}
          />
        </Typography>
        <Typography variant="h2">
          and my dream workplace is a{" "}
          <Dash words={["tech startup", "hedge fund", "large company"]} />.
        </Typography>
      </Grid>
      <Grid container justify="space-between" item>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          <Button size="large" className={classes.button} variant="outlined">
            sign up
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <img src={penguin} alt="penguin" />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default Introductions
