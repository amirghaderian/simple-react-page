import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
    DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 27px ) ", md: 25 },
        }}
      >
        <Fab color="primary" aria-label="add" size={"medium"}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          width={400}
          height={350}
          bgcolor="rgb(255,255,255)"
          p={3}
          borderRadius={"7px"}
        >
          <Typography
            variant="h6"
            color="gray"
            display="flex"
            justifyContent="center"
          >
            Create post
          </Typography>
          <Box display="flex" gap="10px">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHRR3hmaWGnKRU1flnUvukPsjQ6KFG2iKkQ&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            ></Avatar>
            <Typography variant="span" fontSize="18px">
              Amir ghaderian
            </Typography>
          </Box>
          <TextField
            id="filled-multiline-static"
            placeholder="what's on your mind?"
            multiline
            rows={4}
            variant="filled"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="succes" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ml:"170px",mt:"30px",width:"200px"}}
                      >
            <Button sx={{width:"125px"}}>Post</Button>
            <Button  sx={{width:"75px"}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
