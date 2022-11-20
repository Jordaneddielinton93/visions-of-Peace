import { Box } from "@mui/material";
import Head from "next/head";
import { CardPurchaseSection } from "../components/CardPurchaseSection";
import { HomeHeroSection } from "../components/HomeHeroSection";
import { HomeWhySection } from "../components/HomeWhySection";
import { ImageGallary } from "../components/ImageGallary";
import { WhyChooseMe } from "../components/WhyChooseMe";

export default function Home() {
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
      <HomeHeroSection />
      <WhyChooseMe />
      <CardPurchaseSection />
      <HomeWhySection />
      <ImageGallary />
    </Box>
  );
}
