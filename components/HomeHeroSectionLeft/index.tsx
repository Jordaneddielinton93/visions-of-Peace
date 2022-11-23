import { Box } from "@mui/system";
import * as React from "react";
import { OrderNow } from "../Buttons/OrderNow";
import { homePageHeading } from "../constants/constants";

export function HomeHeroSectionLeft() {
  return (
    <Box
      sx={{
        height: "300px",
        width: { xs: "300px", sm: "300px", md: "440px", lg: "440px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box component={"h1"} sx={{ width: "100%" }}>
        {homePageHeading.map(({ text, color, fontSize }) => {
          return (
            <Box
              key={text}
              sx={{
                fontSize: fontSize,
                fontFamily: "IM Fell French Canon",
                color: color,
              }}
              component={"span"}
            >
              {text}{" "}
            </Box>
          );
        })}
      </Box>
      <Box
        component={"p"}
        color="secondary.main"
        sx={{ width: "100%", fontSize: "14px", fontWeight: "400" }}
      >
        We are dedicated to help you achieve a sense of well being for your body
        , soul and mind by providig a variety of health, beauty and mind
        services
      </Box>
      <Box sx={{ width: "100%" }}>
        <OrderNow />
      </Box>
    </Box>
  );
}
