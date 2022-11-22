import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { memo } from "react";
import styles from "./styles.module.css";

import Carousel from "react-material-ui-carousel";

import { items } from "../../constants/constants";
export interface ICarousel1Props {}

function Carousel1(props: ICarousel1Props) {
  return (
    <Carousel>
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
        height: "400px",
        background: "red",
        backgroundImage: `url(${props.item.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
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
      <Box className={styles.gradient}></Box>
      <Box className={styles.gradient2}></Box>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
