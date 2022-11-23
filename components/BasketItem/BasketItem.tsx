import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { BasketItemButtons } from "../BasketItemButtons";

import { BasketItemText } from "../BasketItemText";

export interface IBasketItemProps {
  image: string;
  title: string;
  description: string;
  id: number;
  quantity: number;
  price: number;
  setBasket: (e: any) => void;
}

export function BasketItem({
  id,
  image,
  title,
  description,
  quantity,
  price,
  setBasket,
}: IBasketItemProps) {
  return (
    <Box
      component={"section"}
      height={{ xs: "350px", sm: "140px", md: "140px", lg: "140px" }}
      justifyContent="space-evenly"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },

        borderTop: "solid thin",
        borderColor: "primary.main",
        maxWidth: "800px",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Box
        height={{ xs: "115px", sm: "115px", md: "115px", lg: "115px" }}
        width={{ xs: "115px", sm: "115px", md: "115px", lg: "115px" }}
        minHeight={{ xs: "115px", sm: "115px", md: "115px", lg: "115px" }}
        minWidth={{ xs: "115px", sm: "115px", md: "115px", lg: "115px" }}
        sx={{ position: "relative" }}
      >
        <Image src={image} alt={title} objectFit="contain" layout="fill" />
      </Box>
      <Box
        width="100%"
        height={"100%"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"space-evenly"}
      >
        <BasketItemText title={title} description={description} />
        <BasketItemButtons
          quantity={quantity}
          price={price}
          id={id}
          setBasket={setBasket}
        />
      </Box>
    </Box>
  );
}
