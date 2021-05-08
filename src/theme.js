import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#6754c8",
    },
    text: {
      primary: "#363636",
      secondary: "#999999",
      tertiary: "rgba(255,255,255,0.5)",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Karla, Helvetica, Arial, sans-serif",
    fontSize: "16",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    textTransform: "none",
    wordBreak: "break-all",
    header: {
      minHeight: "4.7rem",
      "@media (min-width:960px)": {
        minHeight: "7.2rem",
      },
      maxWidth: "114rem",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    footerColumn: {
      width: "max-content",
    },
    sectionContainer: {
      padding: "0 1.5rem",
      margin: 0,
      width: "100%",
      transform: "translateY(4rem)",
      "& div": {
        padding: "0 2rem",
      },
      "@media (min-width:960px)": {
        margin: "0 1.5rem",
      },
      "@media (min-width:1280px)": {
        margin: "0 auto",
        maxWidth: "70rem",
        transform: "translateY(9rem)",
      },
    },
    gridSpacing: {
      "& .MuiGrid-item": {
        padding: "2rem 0",
      },
    },
    button: {
      letterSpacing: "1px",
      textTransform: "none",
      borderRadius: "2.5rem",
      padding: "0.9rem 2rem",
    },
    grid: {
      marginBottom: "8rem",
    },
    h1: {
      fontFamily: "Platform,Helvetica,sans-serif",
      fontWeight: 700,
      fontSize: "3.6rem",
      overflowWrap: "break-word",
      textTransform: "none",
      "@media (min-width:960px)": {
        fontSize: "8rem",
      },
      "@media(max-width:600)": {
        width: "100%",
      },
    },
    h2: {
      fontFamily: "Platform,Helvetica,sans-serif",
      fontWeight: 700,
      fontSize: "3.6rem",
      textTransform: "none",
      "@media (min-width:960px)": {
        fontSize: "5.6rem",
      },
      // wordBreak: "break-all",
    },
    h3: {
      fontFamily: "Platform,Helvetica,sans-serif",
      textTransform: "none",
      fontSize: "3.2rem",
      fontWeight: 700,
    },

    body1: {
      overflowWrap: "break-word",
      fontSize: "2rem",
    },
    body2: {
      // textTransform: "capitalize",
      fontWeight: "700",
    },
  },
})

export default theme
