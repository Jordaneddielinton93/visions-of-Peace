import { Link } from "@mui/material";
import { Box } from "@mui/system";
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
        zIndex: 10,
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
