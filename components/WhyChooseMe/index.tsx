import { Box } from "@mui/material";
import * as React from "react";
import { whyChooseMe } from "../constants/constants";
import { WhyChooseMeCard } from "../WhyChooseMeCard";

export function WhyChooseMe() {
  return (
    <Box
      sx={{
        padding: { xs: "0 10px", sm: "0 50px", md: "0 50px", lg: "0 65px" },
        height: { xs: "500px", sm: "500px", md: "200px", lg: "200px" },
      }}
    >
      <Box
        component={"h2"}
        color="secondary.main"
        sx={{
          fontSize: "31px",
          fontWeight: "600",
        }}
      >
        Why Choose Me?
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          gap: "20px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {whyChooseMe.map(({ svg, title, text }) => {
          return (
            <WhyChooseMeCard key={title} svg={svg} title={title} text={text} />
          );
        })}
      </Box>
    </Box>
  );
}
