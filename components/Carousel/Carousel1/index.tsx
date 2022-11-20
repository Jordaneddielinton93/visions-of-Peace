import { Box } from "@mui/system";
import * as React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

export interface ICarousel1Props {}
const giauPass =
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
const bogliasco =
  "https://images.unsplash.com/photo-1514646544754-9d1bbea5ccc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80";
const countyClare =
  "https://images.unsplash.com/photo-1495396310650-64841eacfa3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
const craterRock =
  "https://images.unsplash.com/photo-1495191712857-c3a9aa54f482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

export default function Carousel1(props: ICarousel1Props) {
  return (
    <Box
      sx={{
        height: "400px",
        width: "100%",
        // background: "green",
      }}
    >
      <HeroSlider
        height={"400px"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) => nextSlide,
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) => nextSlide,
        }}
      >
        <Overlay>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
              width: "100%",
              height: "100%",
              margin: "0",
              padding: "0",
              pointerEvents: "none",
            }}
          >
            <Box
              color={"primary.main"}
              component={"h1"}
              sx={{
                margin: "0 auto",
                padding: "0",
                width: "90%",
                textAlign: "center",
                fontSize: "3.5rem",
                textShadow: "2px 2px white",
                fontFamily: "IM Fell French Canon",
              }}
            >
              Visions{" "}
              <Box
                component={"span"}
                color={"secondary.main"}
                sx={{
                  textShadow: "2px 2px white",
                  fontFamily: "IM Fell French Canon",
                }}
              >
                of
              </Box>{" "}
              Peace
            </Box>

            <Box
              component={"h3"}
              color="white"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
                width: "100%",
                height: "100%",
                margin: "0",
                padding: "0",
                pointerEvents: "none",
              }}
            >
              Your one stop shop for all things beauty.
            </Box>
          </Box>
        </Overlay>

        <Slide
          shouldRenderMask
          label="Brown Beauty"
          background={{
            backgroundImageSrc: giauPass,
          }}
        />

        <Slide
          shouldRenderMask
          label="Pink Pilot"
          background={{
            backgroundImageSrc: bogliasco,
          }}
        />

        <Slide
          shouldRenderMask
          label="Wild Lash's "
          background={{
            backgroundImageSrc: countyClare,
          }}
        />

        <Slide
          shouldRenderMask
          label="Dark ora"
          background={{
            backgroundImageSrc: craterRock,
          }}
        />

        <MenuNav />
      </HeroSlider>
    </Box>
  );
}
