import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../../assets/scouted-logo.svg"
import Button from "../Button/Button"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => {
  return {
    logoContainer: {},
    toolbar: {
      justifyContent: "space-between",
    },
    navigation: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },

    menu: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      display: "block",
    },
  }
})

function Header({ scrolled }) {
  const classes = useStyles()
  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container="row">
            <Grid item xs={0} lg={1} xl={3} />
            <Grid
              xs={12}
              md={10}
              lg={8}
              xl={6}
              item
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <div className={classes.logoContainer}>
                <img src={logo} alt="" />
              </div>
              <nav className={classes.navigation}>
                <Button variant="text">Candidates</Button>
                <Button variant="text">Companies</Button>
                <Button endIcon={<ArrowDropDownIcon />} variant="text">
                  About Us
                </Button>
                <Button variant="text">Advice</Button>
              </nav>
              <div>
                <IconButton className={classes.menu}>
                  <MenuIcon />
                </IconButton>
                {scrolled ? (
                  <>
                    <Button
                      elevation={0}
                      getStarted
                      classname={classes.getStarted}
                    >
                      get started
                    </Button>
                  </>
                ) : (
                  <div className={classes.navigation}>
                    <Button variant="text">log in</Button>
                    <Button variant="text">sign in</Button>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
