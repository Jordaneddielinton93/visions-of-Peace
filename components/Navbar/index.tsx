import { Box } from "@mui/system";
import * as React from "react";
import Basket_and_Navlinks from "../Basket_and_Navlinks";
import Logo_large from "../Logo/Logo_large";
import SearchBar from "../SearchBar";

export function Navbar() {
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
        zIndex: 20,
        position: "relative",
      }}
    >
      <Logo_large />
      <SearchBar />
      <Basket_and_Navlinks />
    </Box>
  );
}
