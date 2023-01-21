import { createTheme, responsiveFontSizes } from "@mui/material";

export const primaryColor = '#495E57';
export const secondaryColor = '#F4CE14';
export const mainColor = '#FFFFFF';

let theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    text:{
       primary: mainColor,
       secondary: primaryColor,
    },
  },
  typography:{
    fontFamily: 'Markazi Text',
  },
});

theme = responsiveFontSizes(theme);

export default theme;