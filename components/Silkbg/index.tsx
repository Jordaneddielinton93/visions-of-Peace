import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import silkbg from "../../public/images/home/silkbg.png";
export interface ISilkbgProps {
  right: string;
  left: string;
  top: any;
}

export function Silkbg({ right, left, top }: ISilkbgProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: right,
        left: left,
        top: top,
      }}
    >
      <Image src={silkbg} alt="silk image background" />
    </Box>
  );
}
