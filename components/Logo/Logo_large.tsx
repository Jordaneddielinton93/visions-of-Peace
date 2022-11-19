import { Button, Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";
import Logo_small from "./Logo_small";

export interface ILogo_largeProps {}

export default function Logo_large(props: ILogo_largeProps) {
  return (
    <Link
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "173px",
        height: "36px",
      }}
    >
      <Logo_small />
      <Box component={"span"}>Visions</Box>
      <Box component={"span"} color="secondary.main">
        Of
      </Box>
      <Box component={"span"}>Peace</Box>
    </Link>
  );
}
