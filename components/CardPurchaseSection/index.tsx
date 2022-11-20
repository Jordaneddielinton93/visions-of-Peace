import { Box } from "@mui/material";
import * as React from "react";
import { OrderNow } from "../Buttons/OrderNow";
import { CardPurchase } from "../CardPurchase";
import { cardArray } from "../constants/constants";
import { Silkbg } from "../Silkbg";
import styles from "./styles.module.css";
import silkbg from "../../public/images/home/silkbg.png";

export interface ICardPurchaseSectionProps {}

export function CardPurchaseSection(props: ICardPurchaseSectionProps) {
  return (
    <Box
      sx={{
        minHeight: "490px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Silkbg top={"0%"} right="0px" left="" img={silkbg} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          padding: "0 40px",
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
          {cardArray.map(({ img, title, text, price }) => {
            return (
              <CardPurchase
                key={title}
                title={title}
                text={text}
                price={price}
              />
            );
          })}
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <OrderNow />
      </Box>
    </Box>
  );
}
