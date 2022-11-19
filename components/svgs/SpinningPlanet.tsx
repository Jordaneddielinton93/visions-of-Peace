import { Box } from "@mui/system";
import Styles from "./styles.module.css";
export default function SpinningPlanet() {
  return (
    <Box
      sx={{
        position: "absolute",

        zIndex: "1",
        width: { xs: "315px", sm: "320px", md: "374px", lg: "374px" },
        height: "374px",
        overflow: { xs: "hidden", sm: "hidden", md: "visible", lg: "visible" },
      }}
    >
      <svg
        className={"spinImg"}
        width="100%"
        height="100%"
        viewBox="0 0 374 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="33" cy="83" r="15" fill="#B979A7" />
        <circle cx="356" cy="264" r="15" fill="#B979A7" />
        <circle cx="187" cy="187" r="186" stroke="#BA79A7" stroke-width="2" />
        <circle cx="187" cy="187" r="158.5" fill="#F0EAE7" stroke="#855744" />
        <circle cx="187" cy="187" r="158.5" stroke="#855744" />
      </svg>
    </Box>
  );
}
