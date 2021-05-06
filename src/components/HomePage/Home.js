import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Hero from "./Hero"
import Assesment from "./Assesment"
import HighTech from "./HighTech"
import Platform from "./Platform"
import Message from "./Message"
import SocialProof from "./SocialProof"
import Carousel from "./Carousel"

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
      <Message />
      <Grid direction="row" container>
        <Grid xs={12} md={10} lg={10} xl={6} item container direction="column">
          <Grid className={classes.grid} item>
            <Hero />
          </Grid>
          <div className={classes.grid}>
            <Grid item className={classes.grid}>
              <Assesment />
            </Grid>
            <Grid item className={classes.grid}>
              <HighTech />
            </Grid>
            <Grid item className={classes.grid}>
              <Platform />
            </Grid>
            {/* <Grid item className={classes.grid}> */}
            {/* </Grid> */}
          </div>
        </Grid>
      </Grid>
      <Carousel />
      <SocialProof />
    </>
  )
}

export default Home
