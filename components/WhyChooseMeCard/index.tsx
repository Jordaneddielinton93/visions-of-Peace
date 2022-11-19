import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export interface IWhyChooseMeCardProps {
  svg: any;
  title: string;
  text: string;
}

export function WhyChooseMeCard({ svg, title, text }: IWhyChooseMeCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "102px",
        width: { xs: "100%", sm: "100%", md: "235px", lg: "235px" },
        borderRadius: "16px",
        backgroundColor: "#FBF6FA",
        boxShadow:
          "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;",
      }}
    >
      <Image src={svg} alt={title} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "140px",
        }}
      >
        <Box
          component={"h5"}
          sx={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {title}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          {text}
        </Box>
      </Box>
    </Box>
  );
}
