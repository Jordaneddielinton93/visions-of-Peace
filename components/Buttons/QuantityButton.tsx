import { Button } from "@mui/material";
import * as React from "react";

export interface IaddButtonProps {
  icon: React.ReactNode;
  handleClick: () => void;
  ariaName: string;
}

export function QuantityButton({
  icon,
  handleClick,
  ariaName,
}: IaddButtonProps) {
  return (
    <Button
      aria-label={ariaName}
      onClick={handleClick}
      style={{
        maxWidth: "30px",
        maxHeight: "30px",
        minWidth: "30px",
        minHeight: "30px",
      }}
      sx={{
        border: "solid thin",
        borderColor: "primary.main",
        borderRadius: "5px",
      }}
    >
      {icon}
    </Button>
  );
}
