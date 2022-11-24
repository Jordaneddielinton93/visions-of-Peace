import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export interface ICreateMuiThemeProps {
  children: React.ReactNode;
}

export default function MuiWrapper(props: ICreateMuiThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#B979A7",
      },
      secondary: {
        main: "#855744",
      },
      background: {
        // default: "#faf2f6",
        paper: "white",
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
