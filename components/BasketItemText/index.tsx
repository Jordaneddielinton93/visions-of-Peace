import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface IBasketItemTextProps {
  title: string;
  description: string;
}

export function BasketItemText({ title, description }: IBasketItemTextProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontSize={"13px"} fontWeight="bold">
        {title}
      </Typography>
      <Typography fontSize={"12px"}>{description.slice(0, 80)}...</Typography>
    </Box>
  );
}
