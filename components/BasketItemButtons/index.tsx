import { Box, Button, Stack } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import StoreQuantityButton from "../Buttons/StoreQuantityButtons";

export interface IBasketItemButtonsProps {
  quantity: number;
  price: number;
  id: number;
  setBasket: (e: any) => void;
}

export function BasketItemButtons({
  quantity,
  price,
  id,
  setBasket,
}: IBasketItemButtonsProps) {
  console.log("re-rendered");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        height: { xs: "100px", sm: "100px", md: "32px", lg: "32px" },
        width: "100%",
      }}
    >
      <StoreQuantityButton id={id} />

      <Stack direction="row" spacing={1}>
        <Button variant="outlined" sx={{ width: "55px" }}>
          £{price}
        </Button>
        <Button
          onClick={() => setBasket({ type: "removeItemFromBasket", id: id })}
          variant="contained"
          sx={{ width: "100px" }}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
}
