import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,

  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});
import { useQuery } from "@tanstack/react-query";
import fetchAllData from "../hooks/fetchAllData";
import { useRouter } from "next/router";

export default function SearchBar() {
  const { data, status } = useQuery(["store"], fetchAllData);
  const router = useRouter();
  const options = !data
    ? []
    : data.map((option: any) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          ...option,
        };
      });

  return (
    <Autocomplete
      onChange={(e, newValue) => router.push(`/store/${newValue.id}`)}
      id="grouped-demo"
      options={options.sort(
        (a: any, b: any) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option: any) => option.firstLetter}
      getOptionLabel={(option: any) => option.title}
      sx={{
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
        width: 300,
        border: "none",
        color: "pink",
        margin: "0px 5px",
      }}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          focused
          {...params}
          label="Search Product"
        />
      )}
      renderGroup={(params) => (
        <li>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}
