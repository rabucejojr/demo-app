import React, { useState } from 'react';
import { Button, IconButton, TextField, InputAdornment, Box, Typography } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

const Upload = () => {
   const [selectedFile, setSelectedFile] = useState(null);

   const handleChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
   };

   const handleUpload = () => {
      // Implement your upload logic here
      console.log('Uploading file:', selectedFile);
   };

   return (
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
         <TextField
            id="file-upload"
            variant="outlined"
            type="file"
            onChange={handleChange}
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton component="label">
                        <UploadIcon />
                        <input hidden type="file" accept="*" onChange={handleChange} />
                     </IconButton>
                  </InputAdornment>
               ),
            }}
         />
         <Typography variant="body2" sx={{ mb: 1 }}>{/* Spacer */}</Typography>
         <Button variant="contained" component="span" onClick={handleUpload} disabled={!selectedFile}
            sx={{ width: '150px', backgroundColor: 'primary.main' }}>
            Upload
         </Button>
      </Box>
   );
};

export default Upload;
