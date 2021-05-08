import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../../assets/scouted-logo.svg"
import Button from "../Button/Button"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(theme => {
  return {
    header: {
      ...theme.typography.header,
      maxWidth: "114rem",
      [theme.breakpoints.down("sm")]: {
        height: "4.7rem",
        "& img": {
          height: "1.6rem",
        },
      },
    },
    activeStyle: {
      color: `${theme.palette.secondary.main}`,
    },
    toolbar: {
      justifyContent: "space-between",
      textAlign: "flex-end",
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
            wrap="nowrap"
          >
            <div>
              <img src={logo} alt="" />
            </div>
            <nav className={classes.navigation}>
              <Button
                style={{ letterSpacing: 0 }}
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
                style={{ letterSpacing: 0 }}
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
                    Get started
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
