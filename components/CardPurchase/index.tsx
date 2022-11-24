import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";

// or
export interface ICardPurchaseProps {
  img: string;
  title: string;
  text: string;
  price: number;
}

export function CardPurchase({ img, title, text, price }: ICardPurchaseProps) {
  return (
    <Card
      sx={{
        position: "relative",
        minHeight: { xs: "350px", sm: "350px", md: "350px", lg: "350px" },
        minWidth: { xs: "220px", sm: "220px", md: "250px", lg: "250px" },
        maxHeight: { xs: "350px", sm: "350px", md: "350px", lg: "350px" },
        maxWidth: { xs: "220px", sm: "220px", md: "250px", lg: "250px" },
        boxShadow:
          " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
        borderRadius: "15px 15px 0px 15px ",
        border: "solid 2px ",
        borderColor: "primary.main",
        zIndex: "2",
        cursor: "pointer",
        "&:hover": {
          border: " inset 2px",
          borderColor: "gold",
        },
        "&:hover var": {
          height: "20px",
          width: "20px",
        },
      }}
    >
      <CardMedia component="img" height="140" image={img} alt="sapphire" />
      <Box
        component={"var"}
        sx={{
          position: "absolute",
          top: "0px",
          zIndex: 12,
          height: "80px",
          width: "80px",
          transition: "1s",
          borderBottomRightRadius: "100%",
          borderRight: "solid 4px ",
          borderBottom: "solid 4px ",
          borderColor: "primary.main",
          background: "rgba(254,254,254,0.8)",
        }}
      ></Box>

      <CardContent
        sx={{
          boxShadow:
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "0.9rem" }}
        >
          {title.slice(0, 55)}...
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "0.7rem",
            overflow: "hidden",
          }}
        >
          {text.slice(0, 200)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "0px",
          width: "100%",
        }}
      >
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
          £{price}
        </Button>
      </CardActions>
    </Card>
  );
}

// ,
// ,
