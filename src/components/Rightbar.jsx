import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  const itemData = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/58939a42d2b857c51ea91c0d/1566319942248-0GYBX3V9DUH8CU66ZE6V/bloody+mary+obsessed+one+pan+healthy+and+simple+breakfast+recipe+4.jpg",
      title: "Breakfast",
    },
    {
      img: "https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/w_2700,h_1621,c_limit/double-rl-ranch-burger.jpg",
      title: "Burger",
    },
    {
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
      title: "Coffee",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfxJxqfaoWZHDS3eh90d5adTN2fYNPxnq7g&usqp=CAU",
      title: "Hats",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WVB9S3hA2oRoFrBo_VpD6uaMUbTSYOmlzg&usqp=CAU",
      title: "Basketball",
    },
    {
      img: "https://gardenerspath.com/wp-content/uploads/2022/06/How-to-Grow-Ferns-FB.jpg",
      title: "Fern",
    },
    {
      img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg",
      title: "Mushrooms",
    },
    {
      img: "https://www.cookingclassy.com/wp-content/uploads/2018/03/roasted-tomato-soup-4.jpg",
      title: "Tomato basil",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5F299XqrrMMoWzCO-QCAD7s3kk5W0xgOpA&usqp=CAU",
      title: "Sea star",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/57d61144e58c62ac0e3179cf/0545ec9c-1eca-4b4d-bf1d-5763a2eea4c8/Propella-blue-orange+background.jpeg",
      title: "Bike",
    },
  ];
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed"}} width={400}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={3} sx={{position:"relative",display:"flex",justifyContent:"center"}}>
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
          <Avatar
            alt="Agnes Walker"
            src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-bearded-man_1020-5121.jpg?w=2000"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_460336-475.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" mt={2} mb={2}>Latest photos</Typography>
        <ImageList sx={{  height: "80vh" ,}} cols={1} gap={10}>
          {itemData.map((item) => (
            <ImageListItem sx={{  }} key={item.img}>
              <img 
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        
      </Box>
    </Box>
  );
};

export default Rightbar;
