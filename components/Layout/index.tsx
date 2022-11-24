import { Container } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import ReactQueryWrapper from "../contexts/ReactQueryWrapper";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import MuiWrapper from "../contexts/MuiWrapper";
import BasketWrapper from "../contexts/BasketWrapper";
import { FloatingSvg } from "../aniamtions/floatingSvg";

export interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <BasketWrapper>
      <ReactQueryWrapper>
        <MuiWrapper>
          {" "}
          <Box sx={{ backgroundColor: "background.default", zIndex: 2 }}>
            <Container
              sx={{
                width: "100vw",
                minHeight: "100vh",
                backgroundColor: "background.default",
                padding: { xs: "0%", sm: "0%", md: "20px", lg: "20px" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "background.paper",
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
