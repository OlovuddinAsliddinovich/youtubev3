import { Box, Stack } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "../";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-around"}
      alignItems={"center"}
      width={"100%"}
      sx={{ overflow: "hidden" }}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={Math.random()}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
