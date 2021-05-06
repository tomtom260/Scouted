import React, { useState, useEffect, useRef } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Avatar } from "@material-ui/core"

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

function Carousel({ children: items }) {
  const classes = useStyles()
  const [item, setItem] = useState(items[0])
  const interval = useRef()
  const [autoSlide, setAutoSlide] = useState(true)

  useEffect(() => {
    if (!autoSlide) return
    interval.current = setInterval(() => {
      const index = items.findIndex(el => item.avatarName === el.avatarName)
      let nextIndex = index + 1
      if (nextIndex === items.length) nextIndex = 0
      setItem(items[nextIndex])
    }, 3000)

    return () => {
      console.log("cleaning")
      clearInterval(interval.current)
    }
  }, [item.avatarName, items, autoSlide])

  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      spacing={3}
      align="center"
    >
      <Grid item>
        <Typography variant="h1">{item.testimony}</Typography>
      </Grid>
      <Grid container item justify="center" className={classes.radioContainer}>
        {items.map(el => (
          <Grid item>
            <Box
              onClick={() => {
                setItem(el)
                setAutoSlide(false)
              }}
              className={classes.radio}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        classes={{ "spacing-xs-4": classes.gridSpacing }}
        item
        container
        justify="flex-start"
        spacing={4}
      >
        <Grid item>
          <Avatar
            className={classes.avatar}
            src={item.avatar}
            alt={item.avatarAlt}
          />
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
            <Typography variant="body1">{item.avatarName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{item.avatarTitle}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{item.avatarCompany}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Carousel
