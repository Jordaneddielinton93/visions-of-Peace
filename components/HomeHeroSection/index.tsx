import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { HomeHeroSectionLeft } from "../HomeHeroSectionLeft";
import { Silkbg } from "../Silkbg";
import SpinningPlanet from "../svgs/SpinningPlanet";
import angelImage from "../../public/images/home/heroimage.png";
import silkbg from "../../public/images/home/silkbg.png";

export interface IHomeHeroSectionProps {}

export function HomeHeroSection(props: IHomeHeroSectionProps) {
  return (
    <Box
      component={"main"}
      sx={{
        height: { xs: "850px", sm: "450px", md: "450px", lg: "450px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
      }}
    >
      <Box
        component={"section"}
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
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
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component={"span"}
          sx={{
            zIndex: "2",
            overflow: "hidden",
          }}
        >
          <Image src={angelImage} alt="angel image" />
        </Box>

        <SpinningPlanet />
        <Silkbg
          img={silkbg}
          top={{ xs: "0px", sm: "-80px", md: "-80px", lg: "-80px" }}
          left=""
          right="0px"
        />
      </Box>
    </Box>
  );
}
