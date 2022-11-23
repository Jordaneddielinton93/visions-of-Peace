import { Box } from "@mui/system";
import * as React from "react";
import { Silkbg } from "../Silkbg";
import silkbg from "../../public/images/home/silkbg2.png";
import Image from "next/image";
import angelImage2 from "../../public/images/home/heroimage2.png";
import SpinningPlanet from "../svgs/SpinningPlanet";
import { List, ListItem } from "@mui/material";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";
export interface IHomeWhySectionProps {
  main_title: string;
}

export function HomeWhySection({ main_title }: IHomeWhySectionProps) {
  return (
    <Box
      sx={{
        minHeight: "590px",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "coulmn", md: "row", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        margin: "60px 0",
        gap: { xs: "80px", sm: "80px" },
        width: "100%",
      }}
    >
      <Silkbg top={"100px"} right="" left="0" img={silkbg} />
      <Box
        component={"section"}
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component={"span"}
          sx={{
            zIndex: "2",
            overflow: "hidden",
          }}
        >
          <Image src={angelImage2} alt="angel image" />
        </Box>
        <SpinningPlanet />
      </Box>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          //   height: "100%",
          //   justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "start", lg: "start" },
          padding: { xs: "10px", sm: "5px", md: "0", lg: "0" },
          height: { xs: "600px", sm: "600px", md: "500px", lg: "500px" },
          minHeight: "100%",
          justifyContent: "space-evenly",
          zIndex: "2",
        }}
      >
        <Box
          component={"h2"}
          color="primary.main"
          sx={{
            fontFamily: "IM Fell French Canon",
            fontSize: "50px",
            justifySelf: {
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            },
          }}
        >
          {main_title}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontFamily: "poppins",
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "420px",
          }}
          color="secondary.main"
        >
          The idea of spirituality means different things for different people.
          The variety of spiritual beliefs and customs are as varied as the
          people who practice them.
        </Box>

        <List
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            listStyleType: "circle",
            listStylePosition: "inside",
          }}
        >
          <ListItem
            sx={{
              listStyleType: "circle",
              fontWeight: "400",
              gap: "10px",
            }}
          >
            <Brightness2RoundedIcon color="primary" />
            Tiger’s eye: said to provide motivation and lessen fear
          </ListItem>
          <ListItem
            sx={{
              listStyleType: "circle",
              fontWeight: "400",
              gap: "10px",
            }}
          >
            <Brightness2RoundedIcon color="primary" />
            Citrine: believed to spark enthusiasm, creativity, and concentration
          </ListItem>
          <ListItem
            sx={{
              listStyleType: "circle",
              fontWeight: "400",
              gap: "10px",
            }}
          >
            <Brightness2RoundedIcon color="primary" />
            Turquoise: thought to soothe emotions and attract good luck
          </ListItem>
          <ListItem
            sx={{
              listStyleType: "circle",
              fontWeight: "400",
              gap: "10px",
            }}
          >
            <Brightness2RoundedIcon color="primary" />
            Sapphire: known as a stone of prosperity
          </ListItem>
          <ListItem
            sx={{
              listStyleType: "circle",
              fontWeight: "400",
              gap: "10px",
            }}
          >
            <Brightness2RoundedIcon color="primary" />
            Jade: another well-known stone for prosperity and luck
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
