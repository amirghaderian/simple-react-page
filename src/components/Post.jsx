import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ maxWidth: 345 ,margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="210px"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
