import { Button } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Logo_small from "../Logo/Logo_small";

export interface IOrderNowProps {}

export function OrderNow(props: IOrderNowProps) {
  return (
    <Button
      color="secondary"
      variant="contained"
      sx={{
        width: "155px",
        height: "48px",
        borderRadius: "29px",
        position: "relative",
        alignSelf: "flex-start",
        zIndex: 2,
      }}
    >
      <Box
        component={"span"}
        sx={{
          position: "absolute",
          background: "white",
          borderRadius: "100%",
          height: "36px",
          width: "36px",
          zIndex: "0",
          top: "5px",
          left: "5px",
        }}
      >
        <Logo_small />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "20px",
          fontSize: "13px",
          fontWeight: "300",
          paddingLeft: "5px",
          //   width: "240px",
        }}
      >
        Order Now
      </Box>
    </Button>
  );
}
