import React, {useState} from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import FamilyMember from "./FamilyMember";
import StudentModal from "./StudentModal";


const LandingPage = (props) => {
 const  { students, onDelete, onEdit, filteredStudents} = props;

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedFamilyMembers, setSelectedFamilyMembers] = useState();





const mockFamilyMembers = [
  { id: 1, studentId: 1, name: 'Christi', relationship: 'Mother'  },
  { id: 2, studentId: 2, name: 'Nicholas', relationship: 'Father' },
  { id: 3, studentId: 3, name: 'John', relationship: 'Brother'  },
];

const handleOpenModal = (mockFamilyMembers) => {
   console.log(mockFamilyMembers,'mockFamilyMembers')
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setSelectedFamilyMembers([]);
  setIsModalOpen(false);
};
  return (
    <Container maxWidth="lg">
        <Typography variant="h4" style={{ marginTop: '16px' }}>
          Registered Students
        </Typography>
          <TableContainer component={Paper} style={{ marginTop: '16px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Nationality</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>View Family Details</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students?.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.nationality}</TableCell>
                    <TableCell>{student.dateOfBirth}</TableCell>
                    <TableCell>
                      <div key={student.id}>
                        <Button onClick={() => handleOpenModal(mockFamilyMembers, student.id)}>
                          View Family Members
                        </Button>
                      </div>
                      </TableCell>
                    <TableCell>
                    <Button onClick={() => onEdit(student)}><ModeEditIcon /></Button>
                    <Button onClick={() => onDelete(student.id)}><DeleteIcon /></Button>
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            <FamilyMember
              open={isModalOpen}
              handleClose={handleCloseModal}
              mockFamilyMembers={mockFamilyMembers}
              selectedFamilyMembers={mockFamilyMembers}
            />
            
      </Container>
  );
};

export default LandingPage;