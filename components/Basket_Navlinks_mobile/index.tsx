import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BasketButton } from "../Buttons";
import InfoIcon from "@mui/icons-material/Info";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";
type Anchor = "top" | "left" | "bottom" | "right";

export default function TBasket_Navlinks_mobile() {
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

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "background.default",
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
        ].map(({ icon, text }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "about", icon: <InfoIcon /> },
          { text: "store", icon: <StoreIcon /> },
          { text: "contact", icon: <ContactMailIcon /> },
          { text: "faqs", icon: <LiveHelpIcon /> },
        ].map(({ icon, text }, index) => {
          return (
            <Link key={index} href={"/" + text}>
              {" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>{" "}
            </Link>
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
