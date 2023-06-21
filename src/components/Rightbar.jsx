import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/premium-psd/3d-male-cute-cartoon-character-avatar-isolated-3d-rendering_235528-1280.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/premium-psd/3d-illustration-caucasian-man-cartoon-close-up-portrait-standing-man-with-mustache-gray-background-3d-avatar-ui-ux_1020-5090.jpg?w=2000"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://img.freepik.com/premium-psd/3d-businessman-cute-cartoon-character-avatar-isolated-3d-rendering_235528-1305.jpg?w=2000"
          />
          <Avatar alt="Agnes Walker" src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-bearded-man_1020-5121.jpg?w=2000" />
          <Avatar alt="Trevor Henderson" src="https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_460336-475.jpg" />
        </AvatarGroup>{" "}
      </Box>
    </Box>
  );
};

export default Rightbar;
