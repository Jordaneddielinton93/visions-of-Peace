import { Box } from "@mui/material";
import * as React from "react";
import { StoreDescription } from "../StoreDescription";

import { StoreImages } from "../StoreImages";
export interface IStoreImageDescriptionProps {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}

export default function StoreImageDescription({
  image,
  title,
  description,
  price,
  id,
}: IStoreImageDescriptionProps) {
  return (
    <Box
      component="section"
      sx={{
        height: { xs: "850px", sm: "850px", md: "400px", lg: "400px" },
        width: "100%",
        padding: "0 40px",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
      }}
    >
      <StoreImages image={image} title={title} />
      <StoreDescription
        id={id}
        description={description}
        title={title}
        price={price}
      />
    </Box>
  );
}
