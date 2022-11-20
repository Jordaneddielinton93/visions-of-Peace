import { Box } from "@mui/material";
import * as React from "react";
import { CardPurchase } from "../CardPurchase";

export interface IStoreCardsProps {}

export function StoreCards(props: IStoreCardsProps) {
  return (
    <Box
      sx={{
        minHeight: "800px",
        width: "100%",
        padding: {
          xs: "0px 5px",
          sm: "0px 15px",
          md: "0px 65px",
          lg: "0px 65px",
        },
        display: "flex",
        flexWrap: "wrap",
        gap: "40px 10px",
      }}
    >
      {Array(10)
        .fill("")
        .map((item, index) => {
          return <CardPurchase key={index} title={""} text={""} price={""} />;
        })}
    </Box>
  );
}
