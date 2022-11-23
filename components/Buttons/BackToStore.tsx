import { Button } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export interface IBackToStoreButtonProps {}

export function BackToStoreButton(props: IBackToStoreButtonProps) {
  return (
    <Link
      href={"/store"}
      style={{ margin: "60px 0", alignSelf: "center", textDecoration: "none" }}
    >
      <Button
        color="secondary"
        variant="contained"
        sx={{
          width: "180px",
          height: "50px",
          border: "solid thin ",
          borderColor: "primary.main ",
          zIndex: 10,
        }}
      >
        Back To Store
      </Button>
    </Link>
  );
}
