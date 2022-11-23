import { Button } from "@mui/material";
import * as React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box } from "@mui/system";
import { BasketSvg } from "../svgs/Basket";
export interface IBasketButtonProps {
  handleClick: any;
}

export default function BasketButton({ handleClick }: IBasketButtonProps) {
  return (
    <Button
      onClick={handleClick}
      color="secondary"
      variant="contained"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: "22px",
        zIndex: "2",
        width: { xs: "108px", sm: "148px", md: "148px", lg: "148px" },
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
      <MenuOpenIcon
        fontSize="small"
        sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block" } }}
      />
      |
      <BasketSvg />
    </Button>
  );
}
