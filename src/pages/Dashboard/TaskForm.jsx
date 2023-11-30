import { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loadAni from "../../assets/Animation - 1701033986992.json";

const options = ["Sales", "Support", "Content", "Paper-work"];

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [date, setDate] = useState(new Date());

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={loadAni}></Lottie>
      </div>
    );
  }

  const userEmail = user?.email;
  const userName = user?.displayName;

  const handleSubmit = () => {
    const newTask = {
      task,
      hoursWorked,
      date: date.toISOString().split("T")[0],
      userEmail,
      userName,
    };

    setTasks([newTask, ...tasks]);

    setTask("");
    setHoursWorked("");
    setDate(new Date());
    console.log(newTask);

    fetch("https://south-tech-server.vercel.app/worksheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    Swal.fire("Good job!", "Work Added Successfully!", "success");
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Tasks</InputLabel>
            <Select value={task} onChange={(e) => setTask(e.target.value)}>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type="number"
            label="Hours Worked"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add / Submit
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Task</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Hours Worked</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((t, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: "medium" }}>{t.task}</TableCell>
                <TableCell sx={{ fontWeight: "medium" }}>
                  {t.hoursWorked}
                </TableCell>
                <TableCell sx={{ fontWeight: "medium" }}>{t.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TaskForm;
