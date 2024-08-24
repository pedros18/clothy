import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { 
  Box, 
  IconButton, 
  ListItem, 
  MenuItem, 
  Stack, 
  Typography, 
  useTheme,
  List,
  ListItemText,
  Menu 
} from "@mui/material";
import { 
  DarkModeOutlined, 
  ExpandMore, 
  LightModeOutlined 
} from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Topbar = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const languageOptions = ["Arabic", "English"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(1);
  const isLanguageMenuOpen = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuItemClick = (event, index) => {
    setSelectedLanguageIndex(index);
    setAnchorEl(null);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleColorMode = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };

  return (
    <Box sx={{ bgcolor: "#2b3445" ,px:4,py:'5px',borderBottomRightRadius:'14px',borderBottomLeftRadius:'14px'}}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography
          sx={{
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#fff",
            px: 2,
            py: 1,
          }}
          variant="body2"
        >
          Special Offer
        </Typography>

        <Box flexGrow={1} />

        <IconButton onClick={toggleColorMode} color="light">
          {theme.palette.mode === "light" ? (
            <LightModeOutlined sx={{bgcolor:'white',borderRadius:'100px',p:"5px",fontSize:"30px"}}/>
          ) : (
            <DarkModeOutlined sx={{bgcolor:'black',borderRadius:'100px',p:"5px",fontSize:"30px"}}/>
          )}
        </IconButton>

        <List component="nav" aria-label="Language settings" sx={{p:0,m:0}}>
          <ListItem
            id="language-button"
            aria-haspopup="listbox"
            aria-controls="language-menu"
            aria-label="Select language"
            aria-expanded={isLanguageMenuOpen}
            onClick={handleLanguageMenuOpen}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "14px",
              "&:hover":{
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.primary.main,
                  borderRadius:'30px',
                },
            }}
          >
            <ListItemText
              primary={languageOptions[selectedLanguageIndex]}
              primaryTypographyProps={{ sx: { fontSize: "14px", fontWeight: 500 } }}
            />
            <ExpandMore sx={{ fontSize: "18px" }} />
          </ListItem>
        </List>

        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={isLanguageMenuOpen}
          onClose={handleLanguageMenuClose}
          MenuListProps={{
            "aria-labelledby": "language-button",
            role: "listbox",
          }}
        >
          {languageOptions.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedLanguageIndex}
              onClick={(event) => handleLanguageMenuItemClick(event, index)}
              sx={{ fontSize: "14px", px: 3, py: 1.5 }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Stack direction="row" spacing={2}>
          <XIcon sx={{ fontSize: "20px", color: "#fff" }} />
          <FacebookIcon sx={{ fontSize: "20px", color: "#fff" }} />
          <InstagramIcon sx={{ fontSize: "20px", color: "#fff" }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topbar;