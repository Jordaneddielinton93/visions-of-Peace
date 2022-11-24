import { Box, Typography } from "@mui/material";
import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { SilkBanner } from "../SilkBanner";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        component={"section"}
        sx={{ position: "relative", height: "300px", width: "100%" }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "80%",
            width: "100%",
            backgroundColor: "background.paper",
            top: "0",
            borderRadius: "20px",
          }}
        ></Box>
        <SilkBanner
          heading=""
          text="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
      </Box>
      <Box
        component={"section"}
        sx={{
          height: "400px",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2rem",
            },
          }}
        >
          Ready to join the fun?
        </Typography>
        <Box
          sx={{
            width: "70%",
            height: "110px",
            background: "white",
            borderRadius: "20px",
            border: "solid 2px",
            borderColor: "primary.main",
          }}
        ></Box>
        <Box
          sx={{
            width: "300px",
            height: "70px",
            display: "flex",
            justifyContent: "space-evenly",
            color: "primary.main",
          }}
        >
          <InstagramIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <PermPhoneMsgIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}
