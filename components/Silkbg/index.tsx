import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";

export interface ISilkbgProps {
  right: string;
  left: string;
  top: any;
  img: any;
}

export function Silkbg({ right, left, top, img }: ISilkbgProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        right: right,
        left: left,
        top: top,
        zIndex: "0.5",
      }}
    >
      <Image src={img} alt="silk image background" />
    </Box>
  );
}
