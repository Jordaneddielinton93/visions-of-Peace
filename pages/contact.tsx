import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Contact_Box } from "../components/Contact_Box";
import silkbg from "../public/images/home/silkbg.png";
import { Silkbg } from "../components/Silkbg";

export default function Contact() {
  return (
    <Box bgcolor={"background"} position="relative">
      <Silkbg img={silkbg} top="170px" left="" right="0px" />

      <Typography
        color={"secondary"}
        component={"h1"}
        fontSize="3rem"
        textAlign={"center"}
        sx={{
          zIndex: "10",
        }}
      >
        Contact
      </Typography>
      <Typography
        color={"primary"}
        component={"p"}
        textAlign={"center"}
        padding="0px 20px"
        zIndex="10"
      >
        If there is any way that I can help you out feel free to message me on
        any of my socials
      </Typography>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          padding: "0px 10px",
          width: "90%",
          zIndex: "3",
          margin: "auto",
        }}
      >
        <Contact_Box />
      </Box>
    </Box>
  );
}
