import { Box, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { renderButton, renderButtonx, renderText } from "../Displaycompo";

function Step5({ handleclick, handleprevious }) {
  return (
    <Box component={Paper} elevation={0} p={4} bgcolor="#e7f3ff">
      <Typography variant="h5" component="h2" gutterBottom sx={{mb: 2, fontWeight: "500", display: "flex", justifyContent: "center"}}>
        Publisher Information
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Publisher Name"
              multiline
              rows={2}
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Publisher Address"
              multiline
              rows={2}
              fullWidth
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              multiline
              rows={2}
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Publisher Email"
              multiline
              rows={2}
              InputProps={{
                sx: { '& .MuiInputBase-input': { padding: '10px' }}
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between" mt={3}>
          <Grid item>
            {renderButtonx({ label: "Back", handleprevious: handleprevious })}
          </Grid>
          <Grid item>
            {renderButton({ label: "Submit", handleclick: handleclick })}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Step5;
