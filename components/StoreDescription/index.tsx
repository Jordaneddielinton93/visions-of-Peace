import { Box, Button, Typography } from "@mui/material";

import { useContext } from "react";

import { BasketContextWrapper } from "../contexts/BasketWrapper";
import Link from "next/link";
import StoreQuantityButton from "../Buttons/StoreQuantityButtons";

export interface IStoreDescriptionProps {
  title: string;
  description: string;
  price: number;
  id: number;
}

export function StoreDescription({
  id,
  title,
  description,
  price,
}: IStoreDescriptionProps) {
  let { basket } = useContext(BasketContextWrapper);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginLeft: { xs: "0", sm: "0", md: "30px", lg: "30px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        zIndex: "3",
      }}
    >
      <Typography
        component={"h1"}
        sx={{
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      <Typography
        component={"h4"}
        sx={{
          fontSize: "0.8rem",
          fontWeight: "400",
          maxHeight: "100px",
          minHeight: "150px",
          overflowY: "scroll",
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          width: "45px",
          height: "45px",
          border: "solid thin",
          borderColor: "primary.main",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.7rem",
        }}
      >
        £{price}
      </Box>
      <StoreQuantityButton id={id} />
      <Box
        sx={{
          display: "flex",
          height: "37px",
          width: "100%",
          gap: "0px 8px",
        }}
      >
        {basket.length ? (
          <Link href={"/basket"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                width: "127px",
                height: "100%",
                border: "solid thin ",
                borderColor: "primary.main ",
                fontSize: "0.8rem",
              }}
            >
              Go To Cart
            </Button>
          </Link>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
