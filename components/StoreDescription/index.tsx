import { Alert, Box, Button, Typography } from "@mui/material";

import { QuantityButton } from "../Buttons/QuantityButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BasketContextWrapper } from "../contexts/BasketWrapper";

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
  let { basket, setBasket } = useContext(BasketContextWrapper);

  let [quantity, setQuantity] = useState(1);

  function addToCart() {
    setBasket({ type: "addToBasket", payload: { quantity: quantity, id: id } });
  }

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
        component={"h1"}
        sx={{
          fontSize: "1rem",
          fontWeight: "400",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          height: "32px",
          width: "180px",
        }}
      >
        Quantity{" "}
        <QuantityButton
          icon={<RemoveIcon />}
          handleClick={() =>
            quantity > 1 && setQuantity((prevNumb) => prevNumb - 1)
          }
        />
        <QuantityButton icon={quantity} handleClick={() => ""} />
        <QuantityButton
          icon={<AddIcon />}
          handleClick={() => setQuantity((prevNumb) => prevNumb + 1)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "37px",
          width: "100%",
          gap: "0px 8px",
        }}
      >
        <Button
          onClick={addToCart}
          sx={{
            width: "127px",
            height: "100%",
            border: "solid thin ",
            borderColor: "primary.main ",
          }}
        >
          Add To Cart
        </Button>
        <Button
          sx={{
            width: "127px",
            height: "100%",
            border: "solid thin ",
            borderColor: "primary.main ",
          }}
        >
          Go To Cart
        </Button>
      </Box>
    </Box>
  );
}
