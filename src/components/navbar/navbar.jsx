import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      p={2}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      zIndex={999}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      backgroundColor={colors.primary}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Typography variant="h4" fontWeight={"bold"} color={"#db0000"}>
          Youtube
        </Typography>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
