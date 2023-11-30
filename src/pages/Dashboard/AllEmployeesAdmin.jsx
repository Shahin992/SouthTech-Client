import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

function createData(name, Email, Verified, Bank, Account, Salary, Pay, Details) {
  return { name, Email, Verified, Bank, Account, Salary, Pay, Details };
}

export default function BasictableAdmin() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axios.get('http://localhost:5000/users');
        return res.data;
    }
})

const handlehr = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
    if(data.modifiedCount > 0){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an HR Now!`,
            showConfirmButton: false,
            timer: 1500
          });}})
}


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Make HR</TableCell>
            <TableCell>Fire</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              
              <TableCell>{user.designation}</TableCell>
              <TableCell>
               {
                user.employeeRole === "HR" ?  <Button onClick={()=>handlehr(user)}
                type="submit"
                disabled
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: '16px',
                  backgroundColor: '#e53935',
                  '&:hover': { backgroundColor: '#c62828' },
                }}
              >
                Make HR
              </Button> :  <Button onClick={()=>handlehr(user)}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: '16px',
                    backgroundColor: '#e53935',
                    '&:hover': { backgroundColor: '#c62828' },
                  }}
                >
                  Make HR
                </Button>
               }
              </TableCell>
            
              
             
              <TableCell>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: '16px',
                    backgroundColor: '#e53935',
                    '&:hover': { backgroundColor: '#c62828' },
                  }}
                >
                  Fire
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}