import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { renderButton, renderButtonx, renderText } from '../Displaycompo';

function Step3({ handleclick, handleprevious }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'video/mp4') {
      setSelectedVideo(file);
    } else {
      alert('Please select an MP4 video file.');
    }
  };

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    } else {
      alert('Please select a valid image file (PNG, JPG, etc.).');
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Box component={Paper} elevation={0} p={4} bgcolor="#e7f3ff">
      <Typography variant="h5" component="h2" gutterBottom sx={{mb: 2, fontWeight: "500", display: "flex", justifyContent: "center"}}>
        Media Information
      </Typography>
      <form>
        <Grid mb={3}>
          <Grid item xs={12} sm={6}>
            <Box border={1} borderColor="primary.main" p={2} borderRadius={1} sx={{ marginBottom: "2rem", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <label style={{ margin: 'auto', display: 'block' }}>Upload Video :</label>
              <input type="file" accept=".mp4" onChange={handleFileChange} />
              {selectedVideo && (
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <video controls style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
                    <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Button onClick={handleRemoveVideo} style={{ marginLeft: '20px' }} variant="outlined" color="error">Remove Video</Button>
                </div>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box border={1} borderColor="primary.main" p={2} borderRadius={1}  sx={{ marginBottom: "2rem", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <label style={{ margin: 'auto', display: 'block' }}>Upload Thumbnail :</label>
              <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} ref={fileInputRef} />
              {selectedImage && (
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <img src={URL.createObjectURL(selectedImage)} alt="Uploaded pic" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                  <Button onClick={handleRemoveImage} style={{ marginLeft: '20px' }} variant="outlined" color="error">Remove Image</Button>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between" mt={2}>
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

export default Step3;
