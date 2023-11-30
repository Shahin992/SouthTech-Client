import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function createData(
  name,
  Email,
  Verified,
  Bank,
  Account,
  Salary,
  Pay,
  Details
) {
  return { name, Email, Verified, Bank, Account, Salary, Pay, Details };
}

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  // const {verify, setVerify} = useState(null);
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    fetch("https://south-tech-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //   const verifyToggle = async (user) => {
  //      setVerify(true)
  //     const isverify = (!verify)
  //     console.log(isverify);

  //   //  const updatedUserVerify = { ...user, verified: !user.verified };
  //   //   setUser(updatedUserVerify);
  //   //   console.log(updatedUserVerify.verified);

  //     fetch(`https://south-tech-server.vercel.app/users/${user._id}`, {
  //       method: "Put",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ isverified }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.modifiedCount > 0) {
  //           Swal.fire(
  //             "Good job!",
  //             "Booking Date Updated Successfully!",
  //             "success"
  //           )}
  //   })

  // };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const verifytoggle = async (user) => {
    const newverify = !isVerified;
    setIsVerified(newverify);
    console.log(user, newverify);
    await fetch(`https://south-tech-server.vercel.app/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newverify }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Bank Account</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.designation}</TableCell>
              <TableCell>{user.salary}</TableCell>
              <TableCell>{user.bank_account_no}</TableCell>
              <TableCell>
                <Button onClick={() => verifytoggle(user)}>
                  {user.verified === false ? (
                    <CloseIcon />
                  ) : (
                    <DoneOutlinedIcon />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleOpen(user)}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: "16px",
                    backgroundColor: "#e53935",
                    "&:hover": { backgroundColor: "#c62828" },
                  }}
                >
                  Pay
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {selectedUser && `Pay to ${selectedUser.name}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {selectedUser && `Salary: ${selectedUser.salary}`}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {selectedUser && `Pay on ${selectedUser.bank_account_no}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          marginTop: "16px",
                          backgroundColor: "#e53935",
                          "&:hover": { backgroundColor: "#c62828" },
                        }}
                      >
                        Pay
                      </Button>
                    </Typography>
                  </Box>
                </Modal>
              </TableCell>
              <TableCell>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: "16px",
                    backgroundColor: "#e53935",
                    "&:hover": { backgroundColor: "#c62828" },
                  }}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
