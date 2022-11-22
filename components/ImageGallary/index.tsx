import { Box, ImageList, ImageListItem } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import { gallarylist } from "../constants/constants";
import styles from "./styles.module.css";
export interface IImageGallaryProps {}

export function ImageGallary(props: IImageGallaryProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "90%",
          height: "800px",
          overflowY: "hidden",
          borderColor: "primary.main",
          padding: "0 2px",
          position: "relative",
        }}
      >
        <Box className={styles.gradient}></Box>
        <Box className={styles.gradient2}></Box>
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          className={styles.ImageList}
        >
          {gallarylist.map((item, index) => {
            // let randomNumb = Math.floor(Math.random() * (550 - 350 + 1) + 350);
            let randomNumb =
              index % 2 == 0
                ? 340 + index * index * index
                : index % 3 == 0
                ? 550
                : 250;
            return (
              <ImageListItem
                key={randomNumb + index + item.title}
                sx={{
                  border: "outset 3px ",
                  borderColor: "primary.main",
                  position: "relative",
                  minWidth: "100%",
                  paddingBottom: "20%",
                  minHeight: randomNumb + "px",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    borderColor: "gold",
                  },
                }}
              >
                <Image
                  src={item.img}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Box>
  );
}
