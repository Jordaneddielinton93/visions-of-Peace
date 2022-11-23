import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BasketButton from "../Buttons/BasketButton";
import InfoIcon from "@mui/icons-material/Info";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
type Anchor = "top" | "left" | "bottom" | "right";

export default function Basket_and_Navlinks() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  let arrayOfavailablePages: any = [
    "Store",
    "Basket",
    "About",
    "Home",
    "Contact",
  ];
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "white",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Account", icon: <AccountCircleIcon /> },
          { text: "Basket", icon: <LocalGroceryStoreIcon /> },
        ].map(({ icon, text }, index) => {
          return arrayOfavailablePages.includes(text) ? (
            <Link
              key={index}
              href={"/" + text.toLowerCase()}
              style={{ textDecoration: "none" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: "primary.main",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <ListItem
              key={index}
              disablePadding
              sx={{
                textDecoration: "line-through",
                color: "red",
                cursor: "help",
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {[
          { text: "Home", icon: <HomeIcon /> },
          { text: "Store", icon: <StoreIcon /> },
          { text: "About", icon: <InfoIcon /> },

          { text: "Contact", icon: <ContactMailIcon /> },
          { text: "Faqs", icon: <LiveHelpIcon /> },
        ].map(({ icon, text }, index) => {
          return arrayOfavailablePages.includes(text) ? (
            <Link
              key={index}
              href={"/" + (text !== "Home" ? text.toLowerCase() : "")}
              style={{ textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <ListItem disablePadding>
              <ListItemButton sx={{ cursor: "help" }}>
                <ListItemIcon
                  sx={{
                    textDecoration: "none",

                    color: "red",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textDecoration: "line-through",

                    color: "red",
                  }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <BasketButton handleClick={toggleDrawer("right", true)} />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
