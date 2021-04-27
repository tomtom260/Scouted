import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header/Header"
import Hero from "./Hero"
import Assesment from "./Assesment"

const useStyles = makeStyles(theme => ({
  grid: {
    ...theme.typography.grid,
    // backgroundColor: "red",
    // padding: "100px",
  },
}))

function Home() {
  const classes = useStyles()
  return (
    <>
      <Header scrolled={true} />
      <Grid direction="row" container>
        <Grid item xs={0} lg={1} xl={3} />
        <Grid xs={12} md={10} lg={8} xl={6} item container direction="column">
          <Grid className={classes.grid} item>
            <Hero />
          </Grid>
          <div className={classes.grid}>
            <Grid item className={classes.grid}>
              <Assesment />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
