import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export interface IStoreImagesProps {
  image: string;
  title: string;
}

export function StoreImages({ image, title }: IStoreImagesProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 3,
        height: { xs: "850px", sm: "850px", md: "400px", lg: "400px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          border: "solid thin ",
          borderColor: "primary.main",
          background: "white",
          minWidth: "260px",
          minHeight: "260px",
          maxWidth: "260px",
          maxHeight: "260px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image src={image} layout="fill" objectFit="contain" alt={title} />
      </Box>
      <Box
        sx={{
          width: "260px",
          height: "58px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {Array(4)
          .fill("")
          .map((_, index) => {
            return (
              <Box
                key={index}
                width="58px"
                height="58px"
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  border: "solid thin ",
                  borderColor: "primary.main",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  alt={title}
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
