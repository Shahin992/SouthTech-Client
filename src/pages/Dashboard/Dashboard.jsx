
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';


const drawerWidth = 240;

const Dashboard = () => {
  return (
    <div className='max-w-[1100px] mx-auto p-10' style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
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
            <Link to="/dashboard/all-employees">
            <ListItem >
            <ListItemText primary="All Employees" />
          </ListItem>
            </Link>
            <Link to="/dashboard/admin/all-employees">
            <ListItem >
            <ListItemText primary="All Employees Admin" />
          </ListItem>
            </Link>
            <Link to="/dashboard/worksheet">
            <ListItem >
            <ListItemText primary="WorkSheet" />
          </ListItem>
            </Link>
            <Link to="/dashboard/progress">
            <ListItem >
            <ListItemText primary="Employees Progress" />
          </ListItem>
            </Link>
          
          <ListItem button component={Link} to="/dashboard/payment-history">
            <ListItemText primary="Payment History" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: '20px' }}>
        
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
