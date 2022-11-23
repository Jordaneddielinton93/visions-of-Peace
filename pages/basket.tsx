import { Box } from "@mui/material";
import { useContext, useState } from "react";

import { BasketContextWrapper } from "../components/contexts/BasketWrapper";
import fetchAllData from "../components/hooks/fetchAllData";
import { useQuery } from "@tanstack/react-query";
import { BasketItem } from "../components/BasketItem/BasketItem";
import matchAndMerg from "../components/functions/matchAndMerg";
import Head from "next/head";

export interface IBasketProps {}

export default function Basket(props: IBasketProps) {
  let { basket, setBasket } = useContext(BasketContextWrapper);

  const { data, status } = useQuery(["store"], fetchAllData);
  let [trigger, setTrigger] = useState(0);
  function shouldTrigger(e: any) {
    setBasket(e);
    setTrigger(trigger + 1);
  }

  let basket_and_data_info = matchAndMerg(basket, data);
  console.log(basket);
  return (
    <Box bgcolor={"background"}>
      <Head>
        <title>visions-of-peace:Basket</title>
        <meta
          name="description"
          content="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box
        sx={{
          padding: "0 30px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {basket_and_data_info.map((props: any) => {
          return (
            <BasketItem key={props.key} {...props} setBasket={shouldTrigger} />
          );
        })}
      </Box>
    </Box>
  );
}
