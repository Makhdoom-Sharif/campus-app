// 
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';

const Data = [
  {
    Name:"ABC",
    Email:"ABC@gmail.com",
    Category:"Fresher"
  },
 { Name:"ABC",
    Email:"ABC@gmail.com",
    Category:"Fresher"},
    { Name:"ABC",
    Email:"ABC@gmail.com",
    Category:"Fresher"}
];

function preventDefault(event) {
  event.preventDefault();
}

export default function NewApprovals() {
  return (
    <React.Fragment>
      <Title>New Approval Request</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.slice(0,2).map((Data) => (
            <TableRow key={Data.id}>
              <TableCell>{Data.Name}</TableCell>
              <TableCell>{Data.Email}</TableCell>
              <TableCell>{Data.Category}</TableCell>
              <TableCell><Button variant="contained" disableElevation>Accept</Button></TableCell>
              <TableCell><Button variant="contained" disableElevation>Cancel</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more approval requests
      </Link>
    </React.Fragment>
  );
}