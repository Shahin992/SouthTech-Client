
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
   
    
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
   
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ mx: 2, display: "flex", gap: "20px", textAlign: "center" }}
      >
        <img
          src="https://www.southtechgroup.com/wp-content/uploads/2019/07/southtech-logo.svg"
          alt=""
          style={{ width: "120px" }}
        />
       
       
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                Home
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                About
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                DashBoard
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                Contact Us
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C]  font-bold normal-case underline"
                    : "normal-case"
                }
              >
                Register
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                Login
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
const {user,logOut} = useContext(AuthContext)
const [showLogoutButton, setShowLogoutButton] = useState(true);

  const handleButtonClick = () => {
    setShowLogoutButton(!showLogoutButton);
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Log Out Successfully!", "success");
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ backgroundColor: "#01619C" }} />
          </IconButton>
          <Typography
            variant="h6 "
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src="https://www.southtechgroup.com/wp-content/uploads/2019/07/southtech-logo.svg"
              alt=""
              style={{ width: "150px" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block", md: "flex" } }}>
            <Button sx={{ color: "black" }}>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                Home
              </NavLink>
            </Button>
            <Button sx={{ color: "black" }}>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                About
              </NavLink>
            </Button>

            <Button sx={{ color: "black" }}>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                DashBoard
              </NavLink>
            </Button>
            <Button sx={{ color: "black" }}>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C] normal-case font-bold underline"
                    : "normal-case"
                }
              >
                Contact Us
              </NavLink>
            </Button>

            {
              user ? <></> : <Button sx={{ color: "black" }}>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#01619C]  font-bold normal-case underline"
                    : "normal-case"
                }
              >
                Register
              </NavLink>
            </Button>
            }
          {
            user ? <></> :   <Button sx={{ color: "black" }}>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#01619C] normal-case font-bold underline"
                  : "normal-case"
              }
            >
              Login
            </NavLink>
          </Button>
          }

           {user ? (
              <div className="flex gap-4 justify-center items-center ">

                 <div className="flex flex-col gap-4 justify-center text-center items-center">
      <button onClick={handleButtonClick}>
        <div className="ml-20 w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full  object-cover"
            src={user?.photoURL}
            alt=""
          />
        </div>
      </button>
<div>
  
{showLogoutButton && (
        <Button className="text-center" onClick={handleLogOut} variant="outlined">
          Logout
        </Button>
      )}
</div>
    </div>
              </div>
            ) : (
              <Avatar className="ml-20" src="/broken-image.jpg" />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
