import { Container } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import ReactQueryWrapper from "../contexts/ReactQueryWrapper";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import MuiWrapper from "../contexts/MuiWrapper";

import BasketWrapper from "../contexts/BasketWrapper";

export interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <BasketWrapper>
      <ReactQueryWrapper>
        <MuiWrapper>
          {" "}
          <Box
            sx={{
              background: "#F0EAE7",
              backgroundImage: "url(/images/home/wavebg.jpeg)",
              backgroundSize: "210%",
              backgroundPosition: " center",
              transition: "12s",
            }}
          >
            <Container
              sx={{
                width: "100vw",
                minHeight: "100vh",

                padding: { xs: "0%", sm: "0%", md: "0px", lg: "0px" },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Navbar />

                {props.children}
                <Footer />
              </Box>
            </Container>
          </Box>{" "}
        </MuiWrapper>
      </ReactQueryWrapper>
    </BasketWrapper>
  );
}
