import { Box } from "@mui/system";
import * as React from "react";
import Basket_Navlinks_mobile from "../Basket_Navlinks_mobile";
import Logo_large from "../Logo/Logo_large";
import SearchBar from "../SearchBar";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <Box
      component={"nav"}
      sx={{
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0px 3px",
      }}
    >
      <Logo_large />
      <SearchBar />
      <Basket_Navlinks_mobile />
    </Box>
  );
}
