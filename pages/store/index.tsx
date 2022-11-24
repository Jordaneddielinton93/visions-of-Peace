import { Box } from "@mui/system";
import Head from "next/head";
import { CardSlideUp } from "../../components/CardSlideUp";
import Carousel1 from "../../components/Carousel/Carousel1";
import { ImageGallary } from "../../components/ImageGallary";
import { Silkbg } from "../../components/Silkbg";
import { StoreCards } from "../../components/StoreCards";
import { WhyChooseMe } from "../../components/WhyChooseMe";
import wolfImg from "../../public/images/Card/wolfimg.jpeg";
import crystalImg from "../../public/images/Card/crystalimg.jpeg";

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
      <Box
        position={"relative"}
        width={"100%"}
        height="0px"
        sx={{
          background: "yellow",
        }}
      >
        <Box
          position={"absolute"}
          top="-350px"
          display={"flex"}
          justifyContent={"space-evenly"}
          minWidth={"100%"}
          maxWidth={"100%"}
          zIndex="20"
          sx={
            {
              // background: "red",
            }
          }
        >
          <CardSlideUp img={crystalImg} />
          <CardSlideUp img={wolfImg} />
          <CardSlideUp img={crystalImg} />
        </Box>
      </Box>
      <WhyChooseMe />
      <StoreCards />
      <ImageGallary />
    </Box>
  );
}
