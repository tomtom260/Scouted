import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { Hidden, Typography } from "@material-ui/core"
import Dash from "./Dash"
import penguin from "../../assets/penguein-purple-dark.svg"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "8.6rem 0 7.6rem 0",
    boxSizing: "content-box",
    color: "#FFFFFF",
  },
  button: {
    ...theme.typography.button,
    borderWidth: "2px",
    height: "5.2rem",
    width: "12.2rem",
    textTransform: "none",
    "&:hover": {
      color: "#000000",
    },
  },
}))

function Introductions({ setBgColor }) {
  const classes = useStyles()
  const { scrollY } = useViewportScroll()
  const bgColor = useTransform(scrollY, [3800, 4000], ["#FC6D71", "#6754C8"])

  useEffect(() => {
    bgColor.onChange(v => setBgColor(v))
  }, [setBgColor, bgColor, scrollY])

  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
      align="flex-start"
    >
      <Grid item style={{ padding: "0 1.2rem 6.4rem 1.2rem" }}>
        <Typography style={{ color: "#F3F3F3" }} variant="body1">
          <strong>
            Helping super-smart generalists land coveted business opportunities.
          </strong>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">
          Being <Dash words={["creative", "analytical", "personable"]} />
          <span style={{ whiteSpace: "nowrap" }}> is my biggest strength</span>.
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
          <Button
            color="primary"
            size="large"
            className={classes.button}
            variant="outlined"
            component={motion.div}
            whileHover={{
              backgroundColor: "#FFFFFF",
            }}
            transition={{
              duration: 0.15,
            }}
          >
            Sign up
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
