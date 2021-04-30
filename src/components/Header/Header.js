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
import { Link, NavLink } from "react-router-dom"

const useStyles = makeStyles(theme => {
  console.log(window.innerWidth)
  return {
    header: {
      minHeight: "4.7rem",
      [theme.breakpoints.up("md")]: {
        minHeight: "7.2rem",
      },
      margin: "0 auto",
      padding: "0 2.4rem",
      flexWrap: "nowrap",
    },
    activeStyle: {
      color: `${theme.palette.secondary.main}`,
    },
    toolbar: {
      justifyContent: "space-between",
      textAlign: "center",
      padding: 0,
      minHeight: 0,
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
      <AppBar elevation={1} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Grid
            xs={12}
            md={10}
            xl={6}
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            className={classes.header}
          >
            <div className={classes.logoContainer}>
              <img src={logo} alt="" />
            </div>
            <nav className={classes.navigation}>
              <Button
                variant="text"
                to="/"
                exact
                color="#000"
                activeClassName={classes.activeStyle}
                component={NavLink}
              >
                Candidates
              </Button>
              <Button
                variant="text"
                to="/companies"
                color="#000"
                activeClassName={classes.activeStyle}
                component={NavLink}
              >
                Companies
              </Button>
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
        </Toolbar>
      </AppBar>
      <div className={classes.header} />
    </>
  )
}

export default Header
