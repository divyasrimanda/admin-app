import React, { useState, useEffect } from "react";
import { Grid,Button, Container, TextField, Typography,Snackbar } from "@mui/material";
import LandingPage from "./LandingPage";
import MuiAlert from '@mui/material/Alert';
import '../App.css'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const mockFamilyMembers = [
  { id: 1, studentId: 1, name: 'Christi', relationship: 'Mother'  },
  { id: 2, studentId: 2, name: 'Nicholas', relationship: 'Father' },
  { id: 3, studentId: 3, name: 'John', relationship: 'Father'  },
];



export default function StudentForm() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    dateOfBirth: "",
  });
  const [editingStudent, setEditingStudent] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchNationality, setSearchNationality] = useState('');
  
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'John Doe', nationality: 'Christian', dateOfBirth: '1995-08-15' },
      { id: 2, name: 'Bret', nationality: 'Christian', dateOfBirth: '1998-04-22' },
      { id: 3, name: 'Antonette', nationality: 'Christian', dateOfBirth: '1997-04-22' },
      { id: 4, name: 'Samantha', nationality: 'Christian', dateOfBirth: '1996-04-22' },
      { id: 5, name: 'Clementine Bauch', nationality: 'Christian', dateOfBirth: '1998-04-22' },
    ];
    setStudents(initialData);
    setLoading(false);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (editingStudent){
      const updateStudent = students.map((student)=> 
        student.id === editingStudent.id? { ...editingStudent, ...formData }: student
      );
      setStudents(updateStudent);
      setEditingStudent(null);
      setSuccessMessage('Student record updated successfully.');
    }else{
      const newStudent = {
        id: students.length + 1, 
        ...formData,
      };
      setStudents([...students, newStudent]);
      setSuccessMessage('Student record added successfully.');
  }
  setFormData({
    name: '',
    nationality: '',
    dateOfBirth: '',
  });
};

  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      nationality: student.nationality,
      dateOfBirth: student.dateOfBirth,
    });
    setEditingStudent(student);
  };

  const handleDelete = (studentId) => {
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
    setSuccessMessage('Student record deleted successfully.');
  };
  const handleCloseSuccessMessage = () => {
    setSuccessMessage('');
  };

  const handleSearchNationality = (e) => {
    setSearchNationality(e.target.value);
  };

  const filteredStudents = students.filter((student) => 
    student.nationality.toLowerCase().includes(searchNationality.toLowerCase()) 
  
  );

  console.log('students', students)
  return (
    <Container maxWidth="lg">
      <TextField
              label="Search by Nationality"
              variant="outlined"
              value={searchNationality}
              onChange={handleSearchNationality}
              fullWidth
              margin="normal"
     />
     
    {loading ? (
      <Typography>Loading...</Typography>
    ) : (
      <div>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={3}>
          <TextField
          className="form-control"
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
          />
          </Grid>
         
          <Grid item lg={3}>
          <TextField
            label="Nationality"
            variant="outlined"
            name="nationality"
            value={formData.nationality}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
          />
          </Grid>
          <Grid item lg={3}>
          <TextField
            label="Date of Birth"
            variant="outlined"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleFormChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          </Grid>
          <Grid item lg={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="medim"
            style={{height:' 54px',
              marginTop: '16px'}}
          >
            {editingStudent ? 'Edit Details' : 'Add Details'}
          </Button>
          </Grid>
          </Grid>
        </form>
        
        <LandingPage students={filteredStudents} onDelete={handleDelete} onEdit={handleEdit} mockFamilyMembers={mockFamilyMembers} setStudents={setStudents} setSuccessMessage={setSuccessMessage}  />
        <Snackbar
              open={!!successMessage}
              autoHideDuration={3000}
              onClose={handleCloseSuccessMessage}
            >
              <div>
              <Alert onClose={handleCloseSuccessMessage} severity="success">
                {successMessage}
              </Alert>
              </div>
            </Snackbar>
            
      </div>
    )}
  </Container>
  );
}


