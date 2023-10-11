import React from 'react';
import '../App.css';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:'black',
    opacity:'0.5',
    color:'white',
  },
  popup:{
   border:'1px solid white'
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FamilyMember = ({ open, handleClose,  mockFamilyMembers }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
       <Box sx={style}>
       <Typography variant="h6" id="modal-title">
          Family Member Details
        </Typography>
        {mockFamilyMembers.map((member) => (
            <div key={member.id} className={classes.popup}>
              <Typography variant="subtitle1">
                {member.name}
              </Typography>
              <Typography variant="subtitle1">
                Relationship: {member.relationship}
              </Typography>
              <hr />
            </div>
          ))}
        </Box>      
    </Modal>
  );
};

export default FamilyMember;
