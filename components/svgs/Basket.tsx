import { Box } from "@mui/system";
import * as React from "react";

export interface IBasketSvgProps {}

export function BasketSvg(props: IBasketSvgProps) {
  let number = 10;
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        component={"span"}
        sx={{
          position: "absolute",
          right: number > 9 ? "4px" : "7px",
          top: "-1px",
          fontSize: "0.8rem",
          color: "orange",
        }}
      >
        {number}
      </Box>
      <svg
        width="28"
        height="29"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 11H6L13 26.5H27L31.5 16.5V16"
          stroke="white"
          stroke-width="3"
        />
        <circle cx="13.5" cy="31.5" r="2.5" fill="white" />
        <circle cx="24.5" cy="31.5" r="2.5" fill="white" />
      </svg>
    </Box>
  );
}
