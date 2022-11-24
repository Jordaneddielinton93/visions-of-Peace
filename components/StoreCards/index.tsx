import { Box } from "@mui/material";
import * as React from "react";
import { CardPurchase } from "../CardPurchase";
import { useQuery } from "@tanstack/react-query";

import fetchAllData from "../hooks/fetchAllData";
import { Silkbg } from "../Silkbg";
import silkbg2 from "../../public/images/home/silkbg2.png";
import silkbg from "../../public/images/home/silkbg.png";
import { CardSkeletons } from "../CardPurchase/Skeleton";
import Link from "next/link";

export interface IStoreCardsProps {}

export function StoreCards({}: IStoreCardsProps) {
  const { data, status } = useQuery(["store"], fetchAllData);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "800px",
        width: "100%",
        padding: {
          xs: "0px 5px",
          sm: "0px 15px",
          md: "0px 65px",
          lg: "0px 65px",
        },
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "40px 10px",
      }}
    >
      <Silkbg img={silkbg} top={"680px"} left="" right="0px" />
      <Silkbg img={silkbg2} top={"80px"} left="0" right="" />
      {status === "success" ? (
        data.map(
          ({ image, title, description, price, id }: any, index: any) => {
            return (
              <Link key={id} href={`/store/${id}`}>
                <CardPurchase
                  img={image}
                  key={title + index}
                  title={title}
                  text={description}
                  price={price}
                />
              </Link>
            );
          }
        )
      ) : (
        <CardSkeletons />
      )}
    </Box>
  );
}
