import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
export interface ICreateMuiThemeProps {
  children: React.ReactNode;
}

export function CreateMuiTheme(props: ICreateMuiThemeProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#B979A7",
      },
      secondary: {
        main: "#855744",
      },
      background: {
        default: "#F0EAE7",
        paper: "white",
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
