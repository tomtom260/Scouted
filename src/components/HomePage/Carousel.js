import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Avatar } from "@material-ui/core"
import Cecilia from "../../assets/cecelia-shao.png"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "121.4rem",
    padding: "8.6rem 0 7.6rem 0",
  },
  radio: {
    backgroundColor: "red",
    width: "1.5rem",
    height: "1.5rem",
    margin: "1.5rem",
    borderRadius: "50%",
  },
  radioContainer: {
    padding: "3.6rem 0 4.8rem 0 !important",
  },
  avatar: {
    height: "12.8rem",
    width: "12.8rem",
  },
  avatarText: {
    textAlign: "left",
    // justifyContent: "space-evenly",
  },
  gridSpacing: {
    "& > .MuiGrid-item": {
      padding: "0 16px",
    },
  },
}))

function Carousel() {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
      align="center"
    >
      <Grid item>
        <Typography variant="h1">
          “I just wanted to say how thankful I am to have discovered Scouted. I
          am SO much happier in my new role and am so thrilled to have found a
          great new company”
        </Typography>
      </Grid>
      {/* <Grid><Radio></Radio></Grid> */}
      <Grid container item justify="center" className={classes.radioContainer}>
        <Grid item>
          <Box className={classes.radio} />
        </Grid>
        <Grid item>
          <Box className={classes.radio} />
        </Grid>
        <Grid item>
          <Box className={classes.radio} />
        </Grid>
        <Grid item>
          <Box className={classes.radio} />
        </Grid>
      </Grid>
      <Grid
        classes={{ "spacing-xs-4": classes.gridSpacing }}
        item
        container
        justify="flex-start"
        spacing={4}
      >
        <Grid item>
          <Avatar className={classes.avatar} src={Cecilia} alt="cecilia-shao" />
        </Grid>
        <Grid
          className={classes.avatarText}
          direction="column"
          justify="center"
          container
          item
          xs={3}
        >
          <Grid item>
            <Typography variant="body1">Margo Maley</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Associate Marketing Manger</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Amino</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Carousel
