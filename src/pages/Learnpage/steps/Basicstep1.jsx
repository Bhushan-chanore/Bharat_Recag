import { Box, Grid, Paper, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import React from 'react';
import { renderButton, renderText } from '../Displaycompo'

function BasicStep1({ handleclick }) { // Destructure handleClick from props
  return (
    <Box component={Paper} elevation={0} p={4} bgcolor="#e7f3ff">
      <Typography variant="h5" component="h2" gutterBottom sx={{mb: 0, fontWeight: "500", display: "flex", justifyContent: "center"}}>
        Basic Information
      </Typography>
      <form>
        <Box mb={3}>
          <FormControl fullWidth variant="outlined">
            <TextField
              label="Course Title"
              variant="outlined"
              multiline
              rows={2}
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Box>
        
        <Box mb={3}>
          <FormControl fullWidth variant="outlined">
            <TextField
              label="Course Description"
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Box>
        
        <Box display="flex" gap={2} mb={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="level">Course Level</InputLabel>
            <Select
              label="Course Level"
              id="level"
              defaultValue=""
              fullWidth
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advance">Advance</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="category">Course Category</InputLabel>
            <Select
              label="Course Category"
              id="category"
              defaultValue=""
              fullWidth
            >
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="art">Art</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </FormControl>
        </Box>
        <Grid container justifyContent="flex-end">
          {renderButton({ label: "Next", handleclick: handleclick })}
        </Grid>
      </form>
    </Box>
  );
}

export default BasicStep1;
