import { Box } from "@mui/material";
import * as React from "react";
import { OrderNow } from "../Buttons/OrderNow";
import { CardPurchase } from "../CardPurchase";

import { Silkbg } from "../Silkbg";
import styles from "./styles.module.css";
import silkbg from "../../public/images/home/silkbg.png";

import fetchAllData from "../hooks/fetchAllData";
import { CardSkeletons } from "../CardPurchase/Skeleton";
import { useQuery } from "@tanstack/react-query";
export interface ICardPurchaseSectionProps {}

export function CardPurchaseSection({}: ICardPurchaseSectionProps) {
  const { data, status } = useQuery(["store"], fetchAllData);
  console.log(data, status, "heeerrree");

  return (
    <Box
      sx={{
        minHeight: "490px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        zIndex: "2",
      }}
    >
      <Silkbg top={"0%"} right="0px" left="" img={silkbg} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          padding: "0 40px",
          zIndex: "2",
        }}
      >
        <Box
          className={styles.carousel_slider}
          sx={{
            display: "flex",
            gap: "30px",
            margin: "90px 0",
          }}
        >
          {status === "success" ? (
            (console.log("how"),
            data.map(
              ({ image, title, description, price, id }: any, index: any) => {
                return (
                  index < 8 && (
                    <CardPurchase
                      img={image}
                      key={title + index}
                      title={title}
                      text={description}
                      price={price}
                    />
                  )
                );
              }
            ))
          ) : (
            <CardSkeletons />
          )}
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <OrderNow />
      </Box>
    </Box>
  );
}
