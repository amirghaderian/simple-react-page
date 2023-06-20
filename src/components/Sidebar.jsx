import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material";
import { ListItemIcon } from "@mui/material";
import {
  Home,
  ArticleOutlined,
  Group,
  Storefront,
  Person,
  Settings,
  SwitchAccount,
  ModeNight,
} from "@mui/icons-material";
const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#HomePage">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#pages">
              <ListItemIcon>
                <ArticleOutlined />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#marketplace">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components={"a"} href="#profile">
              <ListItemIcon>
                <SwitchAccount />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem disablePadding>
          <ListItemButton components={"a"} href="#profile">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
