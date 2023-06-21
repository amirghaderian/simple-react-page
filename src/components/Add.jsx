import { Fab, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Add = () => {
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 27px ) ", md: 25 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add" size={"medium"}>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Add;
