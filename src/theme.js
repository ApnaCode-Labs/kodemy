import { createTheme } from "@mui/material/styles";

const headingFont = '"Space Grotesk", sans-serif';
const bodyFont = '"Inter", sans-serif';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
    },
    secondary: {
      main: "#F97316",
    },
    background: {
      default: "#0F0F1A",
      paper: "#161626",
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 700 },
    h2: { fontFamily: headingFont, fontWeight: 700 },
    h3: { fontFamily: headingFont, fontWeight: 700 },
    h4: { fontFamily: headingFont, fontWeight: 700 },
    body1: { fontFamily: bodyFont },
    body2: { fontFamily: bodyFont },
    subtitle1: { fontFamily: bodyFont },
    subtitle2: { fontFamily: bodyFont },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#181826",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
