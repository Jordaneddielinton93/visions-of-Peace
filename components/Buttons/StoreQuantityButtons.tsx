import { Box } from "@mui/system";

import { QuantityButton } from "./QuantityButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BasketContextWrapper } from "../contexts/BasketWrapper";
import { useContext, useState } from "react";
import { Alert } from "@mui/material";
export interface IStoreQuantityButtonProps {
  id: number;
}

export default function StoreQuantityButton({ id }: IStoreQuantityButtonProps) {
  let { basket, setBasket } = useContext(BasketContextWrapper);

  const found = basket.find((x: any) => x.id == id);
  let [showSuccessMsg, setShowSuccessMsg] = useState<any>([]);
  function handleAddToBasket() {
    setShowSuccessMsg((prev: any) => [...prev, 1]);
    setBasket({ type: "addOneToBasket", id: id });
  }
  function handleRemoveOneFromBasket() {
    setBasket({ type: "removeOneFromBasket", id: id });
  }
  console.log(showSuccessMsg);
  if (showSuccessMsg.length >= 1) {
    setTimeout(() => {
      let newArr = [...showSuccessMsg];
      newArr.pop();
      setShowSuccessMsg([...newArr]);
    }, 900);
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        height: "32px",
        width: "180px",
      }}
    >
      {showSuccessMsg.length
        ? showSuccessMsg.map((_: any, index: any) => {
            return (
              <Alert
                action=""
                key={index}
                severity="success"
                sx={{
                  position: "fixed",
                  top: index ? `${48 * index}px` : 0,
                  left: "0",
                  width: "100vw",
                  zIndex: 2,
                }}
              >
                successfully added to beasket
              </Alert>
            );
          })
        : ""}
      Quantity{" "}
      <QuantityButton
        icon={<RemoveIcon />}
        handleClick={handleRemoveOneFromBasket}
      />
      <QuantityButton
        icon={found ? found.quantity : 0}
        handleClick={() => ""}
      />
      <QuantityButton icon={<AddIcon />} handleClick={handleAddToBasket} />
    </Box>
  );
}
