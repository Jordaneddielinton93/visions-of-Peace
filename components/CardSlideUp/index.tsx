import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";

export interface ICardSlideUpProps {}
import styles from "./styles.module.css";
export function CardSlideUp({ img }: any) {
  return (
    <Box
      height="280px"
      width="220px"
      sx={{
        position: "relative",
        display: "block",
        borderRadius: "20px",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        margin: "10px",
      }}
    >
      <Box
        component={"span"}
        sx={{
          position: "absolute",
          top: "0",

          height: "195px",
          width: "100%",
          maxWidth: "220px",
        }}
      >
        <Image src={img} layout="fill" objectFit="cover" alt="" />
      </Box>

      <Box
        component={"var"}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          borderradius: "40px",
          backgroundcolor: "#fff",
          transform: "translateY(100%)",
          transition: ".2s ease-in-out",
        }}
        className={styles.card__overlay}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "2em",
            padding: {
              xs: " 30px 10px",
              sm: " 30px",
              md: " 30px",
              lg: " 30px",
            },
            borderRadius: "40px 0 0 0",
            backgroundColor: "#fff",
            transform: "translateY(-100%)",
            transition: ".2s ease-in-out",
          }}
        >
          <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          {/* thumbnail here */}
          <div className={styles.card__header_text}>
            <h3 className={styles.card__title}>Ryan Maths</h3>
            <h2 className={styles.card__title2}>Purchased</h2>
            <span className={styles.card__status}>1 hour ago</span>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
