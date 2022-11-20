import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styles from "./styles.module.css";

import Carousel from "react-material-ui-carousel";
export interface ICarousel1Props {}

export default function Carousel1(props: ICarousel1Props) {
  var items = [
    {
      name: "Tigers eye ",
      description: "Probably the most random thing you have ever seen!",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      name: "Citrine",
      img: "https://images.unsplash.com/photo-1495191712857-c3a9aa54f482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      description: "Hello World!",
    },
    {
      name: "Turquoise",
      img: "https://images.unsplash.com/photo-1495396310650-64841eacfa3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      description: "goodbye World!",
    },
    {
      name: "Sapphire",
      img: "https://images.unsplash.com/photo-1514646544754-9d1bbea5ccc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      description: "goodbye World!",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  console.log(props);
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
