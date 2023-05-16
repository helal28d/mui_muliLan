import { Home, Mail, Notifications } from "@mui/icons-material";
import avatar from "../img/profile.jpg";
import i18next from "i18next";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openlan = Boolean(anchorEl);
  const handleClick   = (event,code) => {
    setAnchorEl(event.currentTarget);
     i18next.changeLanguage(code)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "UK",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "SA",
    },
  ];
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Aakar
          </Typography>
          <Home sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>

          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Tooltip title="Account settings">
              <IconButton
                onClick={(e) => setOpen(true)}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} src={avatar} />
              </IconButton>
            </Tooltip>
          </Icons>
          <Userbox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: 32, height: 32 }} src={avatar} />
            <Typography variant="span">Helal</Typography>
          </Userbox>

          <Menu
            sx={{
              top: 30,
              left: -24,
            }}
            id="account-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            // transformOrigin={{ horizontal: "right", vertical: "top" }}
            // anchorOrigin={{ horizontal: "right", vertical: "top" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Status</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem>
              <span
                aria-controls={openlan ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openlan ? "true" : undefined}
                onClick={handleClick}
              >
                Language
              </span>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openlan}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 32,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {languages.map(({ code, country_code, name }) => (
                  <MenuItem
                    key={country_code}
                    onClick={handleClick(code)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Menu>
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
