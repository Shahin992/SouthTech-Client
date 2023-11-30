/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const WorkSheetPage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [alldata, setAllData] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://south-tech-server.vercel.app/worksheet")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    fetch("https://south-tech-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const AllEmployeeNames = Users.map((data) => data.name);

  const filterData = () => {
    let filteredData = alldata;

    if (selectedEmployee) {
      filteredData = filteredData.filter(
        (data) => data.userName === selectedEmployee
      );
    }

    if (selectedMonth) {
      const secmon = selectedMonth.split("-")[0];
      filteredData = filteredData.filter(
        (data) => data.date.split("-")[1] === secmon
      );
    }

    return filteredData;
  };

  return (
    <div>
      <form>
        <div className="flex justify-between items-center">
          <FormControl sx={{ marginRight: 2, width: "40%" }}>
            <InputLabel>Employee</InputLabel>
            <Select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <MenuItem value="">All Employees</MenuItem>
              {AllEmployeeNames.map((employeeName) => (
                <MenuItem value={employeeName} key={employeeName}>
                  {employeeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ marginRight: 2, width: "40%" }}>
            <InputLabel>Month</InputLabel>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <MenuItem value="">All Months</MenuItem>
              {[
                "01-January",
                "02-February",
                "03-March",
                "04-April",
                "05-May",
                "06-June",
                "07-July",
                "08-August",
                "09-September",
                "10-October",
                "11-November",
                "12-December",
              ].map((monthName, index) => (
                <MenuItem value={monthName} key={index}>
                  {monthName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Employee</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Work Description
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData().map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.task}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WorkSheetPage;
