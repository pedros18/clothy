import { useState } from "react";
import { ShoppingCartOutlined, PersonOutline as PersonOutlineIcon, ShoppingCart as ShoppingCartIcon, Search as SearchIcon, ExpandMore } from "@mui/icons-material";
import { Container, IconButton, InputBase, List, ListItemText, Menu, MenuItem, Stack, Typography, Badge, ListItem } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const options = ['All categories', 'Car', 'Clothes', 'Electronics'];

const Search = styled("div")(({ theme }) => ({
  flexGrow:0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:'#777'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Searchbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Stack direction="row" alignItems="center">
        <ShoppingCartOutlined />
        <Typography variant="body2" sx={{ ml: 1 }}>
          E-Commerce
        </Typography>
      </Stack>
      <Search sx={{display:'flex',borderRadius:'22px',justifyContent:'space-between'}}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: theme.palette.mycolor.main,borderBottomRightRadius:'22px',borderTopRightRadius:'22px',p:0 }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText sx={{width:93,textAlign:'center',"&:hover":{cursor:'pointer'}}} secondary={options[selectedIndex]} />
            <ExpandMore sx={{ fontSize: '16px' }} />
          </ListItem>
        </List>
        <Menu
          
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{fontSize:'13px'}}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>
      <Stack direction="row" alignItems="center">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="profile">
          <PersonOutlineIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Searchbar;
