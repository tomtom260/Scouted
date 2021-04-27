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
    button: {
      textTransform: "capitalize",
      borderRadius: "2.5rem",
      letterSpacing: "1px",
      padding: "0.9rem 2rem",
    },
    h1: {
      fontFamily: "Roboto,Helvetica,sans-serif",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "3.6rem",
      "@media (min-width:960px)": {
        fontSize: "8.8rem",
      },
    },
    body1: {},
  },
})

export default theme

{
  /* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="check__content__icon" style="fill: rgb(97, 196, 156);">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.17 7.168 0 16 0C24.832 0 32 7.17 32 16C32 24.83 24.832 32 16 32C7.168 32 0 24.83 0 16ZM23.551 12.8799C24.039 12.3999 24.039 11.6001 23.551 11.1201C23.062 10.6301 22.271 10.6301 21.783 11.1201L14.667 18.23L10.884 14.45C10.396 13.96 9.604 13.96 9.116 14.45C8.628 14.94 8.628 15.73 9.116 16.22L13.783 20.8799L14.667 21.77L15.551 20.8799L23.551 12.8799Z"></path>
</svg> */
}
