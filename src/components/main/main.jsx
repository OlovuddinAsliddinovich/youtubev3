import { Box, Container, Stack, Typography } from "@mui/material";
import { Category, Videos } from "../";
import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { ApiService } from "../../services/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const data = await ApiService.fetching(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedCategory]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  return (
    <Stack>
      <Category
        selectedCategory={selectedCategory}
        selectedCategoryHandler={selectedCategoryHandler}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container
          maxWidth={"90%"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
