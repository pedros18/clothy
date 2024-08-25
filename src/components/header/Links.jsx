import { Box, Paper, Typography } from "@mui/material";
import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const Links = ({title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-when-hover": { display: "block" },
        ":hover":{cursor:'pointer'},
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          transform: "translateX(-50%)",
          left: "50%",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

            <ListItem sx={{":hover .sub-link" : {display:'block'},position:'relative',}} disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box className='sub-link' sx={{display:'none',position:'absolute',top:0,left:'100%'}}>
                  <Paper sx={{ml:1,minWidth:150,fontSize:'13px'}}>
                    <nav aria-label="secondary mailbox folders">
                      <List sx={{ py: 0, my: 0 }}>
                        <ListItem  disablePadding>
                          <ListItemButton sx={{height:'40px'}} >
                            <ListItemText primary="Add product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem  disablePadding>
                          <ListItemButton sx={{height:'40px'}} component="a" href="#simple-list">
                            <ListItemText primary="Edit product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box >
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px,fontWeight:300,",
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
