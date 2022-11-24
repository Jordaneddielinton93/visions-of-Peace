import { Box } from "@mui/material";
import Head from "next/head";
import * as React from "react";
import { CardPurchaseSection } from "../components/CardPurchaseSection";
import { HomeWhySection } from "../components/HomeWhySection";
import { WhyChooseMe } from "../components/WhyChooseMe";

export default function about() {
  return (
    <Box>
      <Head>
        <title>visions-of-peace:Home</title>
        <meta
          name="description"
          content="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeWhySection main_title="About Me..?" />
      <WhyChooseMe />
      <CardPurchaseSection />
    </Box>
  );
}
