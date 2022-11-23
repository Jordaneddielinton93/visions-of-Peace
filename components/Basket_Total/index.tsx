import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";

import Paper from "@mui/material/Paper";

export function Basket_Total({ data, cartLength }: any) {
  return (
    <Box
      sx={{
        width: "100%",
        Height: "80px",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        gap: "10px",
        padding: "10px 0",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subtotal :</TableCell>
              <TableCell align="right">(items:)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                £
                {data.reduce((accumulator: any, object: any) => {
                  console.log(object);
                  return accumulator + object.price * object.quantity;
                }, 0)}
              </TableCell>
              <TableCell align="right">ffg</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        sx={{
          display: cartLength ? "block" : "none",
          width: { xs: "100%", sm: "100%", md: "200px", lg: "200px" },
          height: { xs: "60px", sm: "60px", md: "60px", lg: "60px" },
        }}
      >
        Proceed To Checkout
      </Button>
    </Box>
  );
}
