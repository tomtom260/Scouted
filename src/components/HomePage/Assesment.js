import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    ...theme.typography.header,
    maxWidth: "114rem",
    padding: "10.8rem 1.5rem 8.4rem 1.5rem",
    "& > div": {
      padding: "1rem 0",
    },
  },
  highTech: {
    padding: "10rem 0 0 0 !important",
  },
}))

function Assesment() {
  const classes = useStyles()
  return (
    <Grid
      className={classes.sectionContainer}
      container
      direction="column"
      // spacing={3}
    >
      <Grid item>
        <Typography variant="h1">
          You +<br />
          Operations associate=
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">Scouted's Assesment</Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="check__content__icon"
            style={{ fill: "rgb(97, 196, 156)" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"
            ></path>
          </svg>
        </Grid>
        <Grid item>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="check__content__icon"
            style={{ fill: "rgb(97, 196, 156)" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"
            ></path>
          </svg>
        </Grid>
        <Grid item>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="check__content__icon"
            style={{ fill: "rgb(97, 196, 156)" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"
            ></path>
          </svg>
        </Grid>
        <Grid item>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="check__content__icon"
            style={{ fill: "rgb(97, 196, 156)" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"
            ></path>
          </svg>
        </Grid>
      </Grid>
      <Grid item style={{ paddingTop: 0 }}>
        <Typography variant="body1">Okay match</Typography>
      </Grid>
      <Grid
        className={classes.highTech}
        container
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h2">High Tech,Human Touch</Typography>
        </Grid>
        <Grid item xs={10} md={8} lg={6}>
          <Typography variant="body1">
            Using our ever-learning AI technology and the expertise of our
            talent team, Scouted helps early to mid-career candidates land the
            right job. The more we get to know you, the smarter we get
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Assesment
