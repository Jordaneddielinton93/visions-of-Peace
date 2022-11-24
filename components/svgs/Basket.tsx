import { Box } from "@mui/system";
import { useContext } from "react";
import { BasketContextWrapper } from "../contexts/BasketWrapper";

export function BasketSvg() {
  let { basket } = useContext(BasketContextWrapper);

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
          right: basket.length > 9 ? "4px" : "7px",
          top: "-1px",
          fontSize: "0.8rem",
          color: "orange",
        }}
      >
        {basket.length}
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
          strokeWidth="3"
        />
        <circle cx="13.5" cy="31.5" r="2.5" fill="white" />
        <circle cx="24.5" cy="31.5" r="2.5" fill="white" />
      </svg>
    </Box>
  );
}
