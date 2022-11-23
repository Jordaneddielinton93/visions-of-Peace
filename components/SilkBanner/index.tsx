import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface ISilkBannerProps {
  text: string;
  heading: string;
}
import silkpinkbgImg from "../../public/images/footer/footerimg.png";

export function SilkBanner({ text, heading }: ISilkBannerProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0",
        left: "0%",
        right: "0%",
        margin: "auto",
        height: { xs: "300px", sm: "300px", md: "200px", lg: "200px" },
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
          flexDirection: "column",
          justifyContent: "space-evenly",
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
        {heading && (
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.3rem", sm: "1.3rem", md: "2rem", lg: "2rem" },
              color: "secondary.main",
              textShadow: "1px 1px white",
            }}
            component={"h2"}
          >
            {heading}
          </Typography>
        )}

        <Typography
          component={"p"}
          sx={{
            textShadow: "1px 1px brown",
            fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem", lg: "1rem" },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
