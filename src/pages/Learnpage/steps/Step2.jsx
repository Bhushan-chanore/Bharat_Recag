import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  InputLabel,
} from "@mui/material";
import React from "react";
import { renderButton, renderButtonx, renderText } from "../Displaycompo";

function Step2({ handleclick, handleprevious }) {
  return (
    <Box component={Paper} elevation={0} p={4} bgcolor="#e7f3ff">
      <Typography variant="h5" component="h2" gutterBottom sx={{mb: 2, fontWeight: "500", display: "flex", justifyContent: "center"}}>
        Curriculum Information
      </Typography>

      <form>
        <Box mb={3}>
          <FormControl fullWidth>
            <TextField
              label="Topic Name"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              InputProps={{
                sx: { "& .MuiInputBase-input": { padding: "10px" } },
              }}
            />
          </FormControl>
        </Box>

        <Box mb={3}>
          <FormControl fullWidth>
            <TextField
              label="Note"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { "& .MuiInputBase-input": { padding: "10px" } },
              }}
            />
          </FormControl>
        </Box>

        <Box display="flex" gap={2} mb={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select label="Category" id="category" defaultValue="">
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advance">Advance</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="subcategory">Sub-Category</InputLabel>
            <Select label="Sub-Category" id="subcategory" defaultValue="">
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advance">Advance</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container justifyContent="space-between">
          <Grid item>
            {renderButtonx({ label: "Back", handleprevious: handleprevious })}
          </Grid>
          <Grid item>
            {renderButton({ label: "Next", handleclick: handleclick })}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Step2;
