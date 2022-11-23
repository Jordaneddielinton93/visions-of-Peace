import { Box } from "@mui/system";
import * as React from "react";

export interface IBasketEmpptyProps {}
import { SilkBanner } from "../SilkBanner";

export function BasketEmppty(props: IBasketEmpptyProps) {
  return (
    <Box
      sx={{
        minHeight: { xs: "300px", sm: "300px", md: "200px", lg: "200px" },
        width: "100%",

        position: "relative",
      }}
    >
      <SilkBanner
        heading="Your Peace Cart is empty."
        text="Your shopping basket lives to serve. Give it purpose – fill it with all the visions you aspire to get and more.
Continue shopping on the Amazon.co.uk homepage, learn about today's deals, or visit your Wish List."
      />
    </Box>
  );
}
