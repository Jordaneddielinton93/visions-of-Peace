import { Box, Typography } from "@mui/material";
import * as React from "react";
import silkpinkbgImg from "../../public/images/footer/footerimg.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  console.log(silkpinkbgImg);
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        width: "100%",
        backgroundColor: "background.default",
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
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0%",
            right: "0%",
            margin: "auto",
            height: "200px",
            width: "95%",
            backgroundImage: `url(${silkpinkbgImg.src})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "solid thick",
              borderColor: "primary.main",
              width: "97%",
              height: "85%",
              padding: "10px",
              textAlign: "center",
              fontWeight: "400",
              color: "white",
              fontSize: {
                xs: "0.6rem",
                sm: "0.8rem",
                md: "1rem",
                lg: "1rem",
              },
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            rem sequi aliquam vitae facere odit praesentium, aut at labore
            dolorum quae alias. Pariatur provident ipsa, hic error molestias
            dolorem doloremque?
          </Box>
        </Box>
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
