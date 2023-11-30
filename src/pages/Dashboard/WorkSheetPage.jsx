/* eslint-disable react/jsx-key */
import  { useState, useEffect } from 'react';
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
} from '@mui/material';


const WorkSheetPage = () => {
  // const [employees, setEmployees] = useState([]); 
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  // const [filteredData, setFilteredData] = useState([]); 
  const [alldata,setAllData] = useState([])
  const [Users,setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/worksheet')
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  const AllEmployeeNames = Users.map(data => data.name)
  console.log(AllEmployeeNames);
  console.log(selectedEmployee);

  const filterData = alldata.filter((data) => data.userName === selectedEmployee);
  console.log(filterData);
 const  monthNames = ['01-January', '02-February', '03-March', '04-April', '05-May', '06-June', '07-July', '08-August', '09-September', '10-October', '11-November', '12-December']
  const months = alldata.map(data => data.date)
  const month = months.map(month=> month.split('-')[1])
  const secmon = selectedMonth.split('-')[0]
   console.log(month ,selectedMonth,secmon);

  const monthlyData = alldata.filter((data) => data.date.split('-')[1] === secmon);
 



  
 
  
  return (
    <div>
    
    <form >
    <div className='flex justify-between items-center'>
    <FormControl sx={{ marginRight: 2 ,width:'40%'}}>
        <InputLabel>Employee</InputLabel>
        <Select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
          <MenuItem value="">All Employees</MenuItem>
          {AllEmployeeNames.map((employeeName) => (
            <MenuItem  value={employeeName}>
              {employeeName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
   

      <FormControl sx={{ marginRight: 2 ,width:'40%'}}>
        <InputLabel>Month</InputLabel>
        <Select value={selectedMonth} onClick={handlemonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <MenuItem value="">All Months</MenuItem>
          {monthNames.map((monthName,index) => (
            <MenuItem  value={monthName}>
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
              <TableCell sx={{fontWeight:'bold'}}>Employee</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Work Description</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Date</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {
             selectedEmployee ? filterData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  
                </TableRow>
              )) : alldata.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  
                </TableRow>
              ))
           
          
            }

            {
             selectedMonth ? monthlyData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  
                </TableRow>
              )) : alldata.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  
                </TableRow>
              ))
           
          
            }



          


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WorkSheetPage;