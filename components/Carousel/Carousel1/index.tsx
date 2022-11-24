import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { memo } from "react";
import styles from "./styles.module.css";

import Carousel from "react-material-ui-carousel";

import { items } from "../../constants/constants";

function Carousel1() {
  return (
    <Carousel sx={{ background: "rgba(255, 255, 255,0.5)" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default memo(Carousel1);
function Item(props: any) {
  return (
    <Paper
      sx={{
        height: "500px",
        background: "red",
        backgroundImage: `url(${props.item.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component={"h2"}
        color="primary.main"
        sx={{
          fontSize: "3rem",
          textShadow: "2px 2px white",
          zIndex: 10,
        }}
      >
        {props.item.name}
      </Box>
      <Box
        component={"h2"}
        color="primary.main"
        sx={{ textShadow: "2px 2px white" }}
      >
        {props.item.description}
      </Box>
      <Box className={styles.gradient2}></Box>
      {/* <Box className={styles.gradient}></Box> */}
    </Paper>
  );
}
