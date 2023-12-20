import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = e.target;
    const name = formdata.name.value;
    const EmployeeEmail = formdata.email.value;
    const password = formdata.password.value;
    const employeeRole = role;
    const bank_account_no = formdata.bank_account_no.value;
    const salary = formdata.salary.value;
    const designation = formdata.designation.value;
    const verified = false;
    const photo = formdata.photo.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APIIMGBB}`,
      formData
    );
    const image = data.data.display_url;
    const info = {
      verified,
      name,
      EmployeeEmail,
      password,
      employeeRole,
      bank_account_no,
      salary,
      designation,
      image,
    };

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 6 characters.",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 1 Uppercase characters.",
      });
      return;
    } else if (!/([@$!%*#?&])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 1 Special characters.",
      });
      return;
    }

    createUser(EmployeeEmail, password)
      .then((result) => {
        console.log(result.user);
        fetch("https://south-tech-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        });

        Swal.fire("Good job!", "Account Created Successfully!", "success");

        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        });

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        const ErrorMessage = error.message;
        console.log(ErrorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };

  return (
    <Grid
      container
      sx={{ marginY: "40px" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "700",
          fontSize: {
            sm: "24px",
            md: "42px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          color: "#08193C",
        }}
      >
        Employee and HR Sign-Up for SouthTech
      </Typography>

      <Grid item md={6}>
        <img
          className="h-full"
          src="https://brainstation-23.com/wp-content/uploads/2023/04/Image-for-website-2-1024x533.png"
          alt=""
        />
      </Grid>

      <Grid item sm={12} md={6}>
        <form onSubmit={handlesubmit} className="space-y-3">
          <div className="space-y-2">
            <TextField
              type="text"
              name="name"
              id="name"
              label="Name"
              placeholder="Enter Your Name Here"
              fullWidth
              required
              sx={{ background: "white" }}
            />

            <TextField
              type="email"
              name="email"
              id="email"
              label="Email address"
              required
              placeholder="Enter Your Email Here"
              fullWidth
              sx={{ background: "white" }}
            />

            <TextField
              type="password"
              name="password"
              autoComplete="new-password"
              id="password"
              label="Password"
              required
              placeholder="*******"
              fullWidth
              sx={{ background: "white" }}
            />

            <Select
              label="Select Role"
              id="role"
              value={role}
              name="role"
              onChange={handleRoleChange}
              fullWidth
              required
              sx={{ background: "white", marginTop: "8px" }}
            >
              <MenuItem value="Select Role" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="hr">HR</MenuItem>
            </Select>

            <TextField
              type="text"
              name="bank_account_no"
              id="bank_account_no"
              label="Bank Account No"
              placeholder="Enter Bank Account No"
              fullWidth
              sx={{ background: "white" }}
            />

            <TextField
              type="text"
              name="salary"
              id="salary"
              label="Salary"
              placeholder="Enter Salary"
              fullWidth
              sx={{ background: "white" }}
            />

            <TextField
              type="text"
              name="designation"
              id="designation"
              label="Designation"
              placeholder="Enter Designation"
              fullWidth
              sx={{ background: "white" }}
            />

            <input
              required
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
            />
          </div>

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
            Sign Up
          </Button>
          <Grid>
            <Typography>
              <p className="mt-5 text-center ">
                Already have an account?{" "}
                <Link
                  className="text-2xl font-semibold hover:underline hover:text-accent"
                  to={"/login"}
                >
                  Log in
                </Link>{" "}
              </p>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
