import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { HomeHeroSectionLeft } from "../HomeHeroSectionLeft";

import SpinningPlanet from "../svgs/SpinningPlanet";
import angelImage from "../../public/images/home/heroimage.png";

export interface IHomeHeroSectionProps {}

export function HomeHeroSection(props: IHomeHeroSectionProps) {
  return (
    <Box
      component={"main"}
      sx={{
        height: { xs: "850px", sm: "450px", md: "450px", lg: "450px" },
        margin: { xs: "0px", sm: "0px", md: "30px 0 ", lg: "30px 0" },
        display: "flex",

        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
      }}
    >
      <Box
        component={"section"}
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "55%" },
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomeHeroSectionLeft />
      </Box>

      <Box
        component={"section"}
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "45%" },
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component={"span"}
          sx={{
            zIndex: "6",
            overflow: "hidden",
          }}
        >
          <Image src={angelImage} alt="angel image" />
        </Box>

        <SpinningPlanet />
      </Box>
    </Box>
  );
}
