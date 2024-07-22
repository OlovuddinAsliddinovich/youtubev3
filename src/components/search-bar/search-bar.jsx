import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);

      setValue("");
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-bar"
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
