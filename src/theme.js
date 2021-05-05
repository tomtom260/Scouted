import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#6754c8",
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
    header: {
      minHeight: "4.7rem",
      "@media (min-width:960px)": {
        minHeight: "7.2rem",
        margin: "0 auto",
      },
      width: "100%",
      padding: "0 2.4rem",
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
      textTransform: "capitalize",
      borderRadius: "2.5rem",
      letterSpacing: "1px",
      padding: "0.9rem 2rem",
    },
    grid: {
      marginBottom: "8rem",
    },
    h1: {
      fontFamily: "Platform,Helvetica,sans-serif",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "3.6rem",
      overflowWrap: "break-word",
      "@media (min-width:960px)": {
        fontSize: "8rem",
      },
      "@media(max-width:600)": {
        width: "100%",
      },
    },
    h2: {
      fontFamily: "Platform,Helvetica,sans-serif",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "3.6rem",
      "@media (min-width:960px)": {
        fontSize: "5.6rem",
      },
    },
    h3: {
      fontFamily: "Platform,Helvetica,sans-serif",
      textTransform: "capitalize",
      fontSize: "3.2rem",
    },

    body1: {
      overflowWrap: "break-word",
    },
    body2: {
      textTransform: "capitalize",
      fontWeight: "bold",
    },
  },
})

export default theme

{
  /* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="check__content__icon" style="fill: rgb(97, 196, 156);">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"></path>
</svg> */
}
