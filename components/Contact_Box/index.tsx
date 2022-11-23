import { Box, Button, Divider, Fab, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import * as React from "react";
import { Stack } from "@mui/system";
import Logo_small from "../Logo/Logo_small";

export interface IContact_BoxProps {}

export function Contact_Box(props: IContact_BoxProps) {
  return (
    <Box
      sx={{
        width: "600px",
        height: "308px",
        border: "solid thin",
        borderColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "8px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        zIndex: "4",
        background: "white",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Logo_small />
        Hey, im Elisha Linton !
      </Typography>
      <Box
        sx={{ height: "1px", width: "80%", backgroundColor: "primary.main" }}
      ></Box>
      <Button variant="outlined" disableElevation>
        Here are my Links{" "}
      </Button>
      <Stack direction={"row"} spacing={2}>
        <Fab color="primary" aria-label="add">
          <FacebookRoundedIcon />
        </Fab>
        <Fab color="primary" aria-label="add">
          <InstagramIcon />
        </Fab>
        <Fab color="primary" aria-label="add">
          <TwitterIcon />
        </Fab>
      </Stack>
    </Box>
  );
}
