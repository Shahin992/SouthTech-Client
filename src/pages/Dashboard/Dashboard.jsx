import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAni from "../../assets/Animation - 1701033986992.json";

const drawerWidth = 240;

const Dashboard = () => {
  const [role, setRole] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const userEmail = user?.email;
  console.log(role, "and", userEmail);

  useEffect(() => {
    axios
      .get(`https://south-tech-server.vercel.app/users/email/${userEmail}`)
      .then((data) => setRole(data.data.employeeRole));
  }, [userEmail]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={loadingAni}></Lottie>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto p-10" style={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/">
            <img
              src="https://www.southtechgroup.com/wp-content/uploads/2019/07/southtech-logo.svg"
              alt=""
              style={{ width: "120px" }}
            />
          </ListItem>

          {role == "hr" ? (
            <List>
              <Link to="/dashboard/all-employees">
                <ListItem>
                  <ListItemText primary="All Employees" />
                </ListItem>
              </Link>
              <Link to="/dashboard/progress">
                <ListItem>
                  <ListItemText primary="Employees Progress" />
                </ListItem>
              </Link>
            </List>
          ) : (
            <></>
          )}

          {role === "employee" ? (
            <List>
              <Link to="/dashboard/worksheet">
                <ListItem>
                  <ListItemText primary="WorkSheet" />
                </ListItem>
              </Link>

              <ListItem button component={Link} to="/dashboard/payment-history">
                <ListItemText primary="Payment History" />
              </ListItem>
            </List>
          ) : (
            <></>
          )}

          {role === "Admin" ? (
            <List>
              <Link to="/dashboard/admin/all-employees">
                <ListItem>
                  <ListItemText primary="All Employees Admin" />
                </ListItem>
              </Link>
            </List>
          ) : (
            <></>
          )}
        </List>
      </Drawer>

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
