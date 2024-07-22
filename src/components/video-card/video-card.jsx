import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import moment from "moment";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
        overflow: "hidden",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component={"img"}
          className="videoImg"
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", md: "320px" },
            height: "180px",
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Box>
            <Typography my={"5px"} sx={{ opacity: ".6" }} fontWeight={"bold"}>
              {moment(video.snippet.publishedAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {video?.snippet?.title?.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
              {video?.snippet?.description?.slice(0, 70)}
            </Typography>
          </Box>
        </Link>

        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {video?.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
