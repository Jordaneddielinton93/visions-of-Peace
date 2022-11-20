import { Button } from "@mui/material";
import * as React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box } from "@mui/system";
import { BasketSvg } from "../svgs/Basket";
export interface IBasketButtonProps {
  handleClick: any;
}

export function BasketButton({ handleClick }: IBasketButtonProps) {
  let basket: number = 1;
  return (
    <Button
      onClick={handleClick}
      color="secondary"
      variant="contained"
      sx={{
        display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: "22px",
        zIndex: "2",
        width: "148px",
      }}
    >
      <Box
        component={"span"}
        sx={{
          fontWeight: "400",
          fontSize: "0.8rem",
          display: "flex",
          width: "50px",
        }}
        color={"white"}
      >
        pages
      </Box>
      <MenuOpenIcon fontSize="small" />
      |
      <BasketSvg />
    </Button>
  );
}
