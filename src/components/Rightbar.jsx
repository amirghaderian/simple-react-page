import { Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{position:"fixed"}}> <Typography variant="h6" >Online Friends</Typography> </Box>
    </Box>
  );
};

export default Rightbar;
