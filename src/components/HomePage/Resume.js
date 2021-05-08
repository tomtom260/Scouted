import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import perry from "../../assets/Perry-Roger.jpg"
import sam from "../../assets/Sam-Bennett.jpg"
import danielle from "../../assets/Danielle-Green.jpg"
import greenCheck from "../../assets/checkgreen.svg"
import grayCheck from "../../assets/checkgray.svg"
import yellowCheck from "../../assets/checkyellow.svg"
import play from "../../assets/play-button-5515fbb3.svg"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "14.9rem 1.5rem 8rem 1.5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  resumeImages: {
    "& > div:not(:last-child)": {
      marginBottom: "7.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      "& > div:last-child": {
        marginBottom: "7.6rem",
      },
    },
  },
  resumeText: {
    width: "max-content",
    marginLeft: "1rem",
    "& > div": {
      marginBottom: "0.2rem",
    },
  },
  text: {
    "& > p": {
      fontSize: "2rem",
    },
    "@media(min-width:960px)": {
      maxWidth: "44.8rem",
    },
  },
  resumeContainer: {
    "@media(max-width:960px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
}))

function Resume() {
  const classes = useStyles()
  return (
    <Grid className={classes.sectionContainer} container align="center">
      <Grid
        style={{ textAlign: "left", justifyContent: "flex-end" }}
        xs={12}
        md={6}
        item
        container
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h2">You are more than your resume</Typography>
        </Grid>
        <Grid classes={{ root: classes.text }} item>
          <Typography variant="body1">
            Let your talents, personality and potential do the talking. We give
            you the opportunity to share your story through our Scouted Virtual
            Interview so companies can get to know the real you.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        md={6}
        className={classes.resumeImages}
        container
        item
        direction="column"
      >
        <Grid
          item
          className={classes.resumeContainer}
          container
          justify="flex-start"
        >
          <Grid item>
            <Box style={{ position: "relative" }}>
              <img src={sam} alt="sam-bennett" />
              <img
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                src={play}
                alt="play-button"
              />
            </Box>
          </Grid>
          <Grid
            className={classes.resumeText}
            classes={{ container: classes.resumeTextContainer }}
            item
            container
            direction="column"
          >
            <Grid item>
              <Typography variant="h3">Sam Bennett</Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <img src={greenCheck} alt="green-check" />
              </Grid>
              <Grid item>
                <img src={greenCheck} alt="green-check" />
              </Grid>
              <Grid item>
                <img src={greenCheck} alt="green-check" />
              </Grid>
              <Grid item>
                <img src={greenCheck} alt="green-check" />
              </Grid>
            </Grid>
            <Grid style={{ textAlign: "left", color: "green" }}>
              <Typography variant="body2">Top match</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item>
            <Box style={{ position: "relative" }}>
              <img src={danielle} alt="danielle green" />
              <img
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                src={play}
                alt="play-button"
              />
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid
              className={classes.resumeText}
              classes={{ container: classes.resumeTextContainer }}
              item
              container
              direction="column"
            >
              <Grid item>
                <Typography variant="h3">Danielle Green</Typography>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item>
                  <img src={greenCheck} alt="green-check" />
                </Grid>
                <Grid item>
                  <img src={greenCheck} alt="green-check" />
                </Grid>
                <Grid item>
                  <img
                    style={{
                      height: "16px",
                      width: "16px",
                      transform: "scale3d(1.3,1.3,1.3)",
                    }}
                    src={yellowCheck}
                    alt="yellow-check"
                  />
                </Grid>
                <Grid item>
                  <img src={grayCheck} alt="gray-check" />
                </Grid>
              </Grid>
              <Grid style={{ textAlign: "left" }}>
                <Typography variant="body2">Unique match</Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <Box style={{ position: "relative" }}>
              <img src={perry} alt="perry-rogers" />
              <img
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                src={play}
                alt="play-button"
              />
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid
              className={classes.resumeText}
              classes={{ container: classes.resumeTextContainer }}
              item
              container
              direction="column"
            >
              <Grid item>
                <Typography variant="h3">Perry Rogers</Typography>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item>
                  <img src={greenCheck} alt="green-check" />
                </Grid>
                <Grid item>
                  <img src={greenCheck} alt="green-check" />
                </Grid>
                <Grid item>
                  <img src={greenCheck} alt="green-check" />
                </Grid>
                <Grid item>
                  <img src={grayCheck} alt="gray-check" />
                </Grid>
              </Grid>
              <Grid style={{ textAlign: "left" }}>
                <Typography variant="body2">Great match</Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Resume
