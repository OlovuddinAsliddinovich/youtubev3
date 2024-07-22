import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import Videos from "../videos/videos";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { ApiService } from "../../services/api.service";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    try {
      const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
      setVideos(data.items);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results fro{" "}
          <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
