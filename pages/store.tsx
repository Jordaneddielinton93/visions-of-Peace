import { Box } from "@mui/system";
import Head from "next/head";
import * as React from "react";
import Carousel1 from "../components/Carousel/Carousel1";
import { WhyChooseMe } from "../components/WhyChooseMe";

export default function Store() {
  return (
    <Box bgcolor={"background"}>
      <Head>
        <title>visions-of-peace:store</title>
        <meta
          name="description"
          content="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Carousel1 />
      <WhyChooseMe />
    </Box>
  );
}
