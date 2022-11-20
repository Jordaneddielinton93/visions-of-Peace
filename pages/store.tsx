import { Box } from "@mui/system";
import Head from "next/head";
import * as React from "react";

export interface IStoreProps {}

export function Store(props: IStoreProps) {
  return (
    <Box bgcolor={"background"}>
      <Head>
        <title>visions-of-peace</title>
        <meta
          name="description"
          content="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </Box>
  );
}
