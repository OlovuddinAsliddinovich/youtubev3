import { Route, Routes } from "react-router-dom";
import { Main, Channel, Navbar, Search, VideoDetail } from "../";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Stack
      direction={"column"}
      maxWidth={"100%"}
      minHeight={"100vh"}
      sx={{ overflowY: "scroll" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Stack>
  );
};

export default App;
