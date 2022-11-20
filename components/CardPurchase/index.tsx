import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";

// or
export interface ICardPurchaseProps {
  title: string;
  text: string;
  price: string;
}

export function CardPurchase({ title, text, price }: ICardPurchaseProps) {
  return (
    <Card
      sx={{
        minHeight: { xs: "350px", sm: "350px", md: "350px", lg: "350px" },
        minWidth: { xs: "220px", sm: "220px", md: "250px", lg: "250px" },
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        borderRadius: "15px 15px 0px 15px ",
        border: "solid 2px ",
        borderColor: "primary.main",
        zIndex: "2",
        cursor: "pointer",
        "&:hover": {
          border: " inset 2px",
          borderColor: "gold",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={"/images/Card/sapphire.png"}
        alt="sapphire"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">Learn More</Button>
        <Button
          size="small"
          sx={{
            height: "25px",
            width: "25px",
            border: "solid thin",
            borderColor: "primary",
            background: "#F0EAE7",
          }}
        >
          {price}
        </Button>
      </CardActions>
    </Card>
  );
}

// ,
// ,
