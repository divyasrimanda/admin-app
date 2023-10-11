import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';

const StudentModal = ({
  open,
  onClose,
  isEditDisabled,
  onSubmit,
  onCancel,
  onDeleteFamilyMember,
  onAddFamilyMember,
  students
}) => {
  const [formData, setFormData] = useState(students);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  return (
    <div>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Student Information</DialogTitle>
      <DialogContent>
        <section>
          <Typography variant="h6">Basic Information</Typography>
          <TextField
            label="Name"
            name="tName"
            value={students?.name}
            onChange={handleFieldChange}
            disabled={isEditDisabled}
            fullWidth
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={students?.dateOfBirth}
            onChange={handleFieldChange}
            disabled={isEditDisabled}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Nationality</InputLabel>
            <Select
              name="nationality"
              value={students?.nationality}
              onChange={handleFieldChange}
              disabled={isEditDisabled}
            >
            </Select>
          </FormControl>
        </section>

        <section>
          <Typography variant="h6">Family Information</Typography>
          {students?.mockFamilyMembers?.map((familyMember, index) => (
            <div key={index}>
              <TextField
                label="Name"
                name={`mockFamilyMembers[${index}].name`}
                value={familyMember.name}
                onChange={handleFieldChange}
                disabled={isEditDisabled}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Relationship</InputLabel>
                <Select
                  name={`mockFamilyMembers[${index}].relationship`}
                  value={familyMember.relationship}
                  onChange={handleFieldChange}
                  disabled={isEditDisabled}
                >
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Nationality</InputLabel>
                <Select
                  name={`mockFamilyMembers[${index}].nationality`}
                  value={familyMember.nationality}
                  onChange={handleFieldChange}
                  disabled={isEditDisabled}
                >
                </Select>
              </FormControl>
              {!isEditDisabled && (
                <Button onClick={() => onDeleteFamilyMember(index)}>
                  Delete Family Member
                </Button>
              )}
            </div>
          ))}
          {!isEditDisabled && (
            <Button onClick={onAddFamilyMember}>Add Family Member</Button>
          )}
        </section>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          Submit
        </Button>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default StudentModal;
