"use client";
import { Box } from "@mui/system";
import Head from "next/head";
import Carousel1 from "../../components/Carousel/Carousel1";
import { ImageGallary } from "../../components/ImageGallary";
import { Silkbg } from "../../components/Silkbg";
import { StoreCards } from "../../components/StoreCards";
import { WhyChooseMe } from "../../components/WhyChooseMe";
import silkbg from "../../public/images/home/silkbg.png";

export default function Store() {
  return (
    <Box bgcolor={"background"} sx={{ position: "relative" }}>
      <Head>
        <title>visions-of-peace:store</title>
        <meta
          name="description"
          content="We are dedicated to help you achieve a sense of well being for your body , soul and mind by providig a variety of health, beauty and mind services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Silkbg
        img={silkbg}
        top={{ xs: "-80px", sm: "-80px", md: "-80px", lg: "-80px" }}
        left=""
        right="0px"
      />

      <Carousel1 />
      <WhyChooseMe />
      <StoreCards />
      <ImageGallary />
    </Box>
  );
}
