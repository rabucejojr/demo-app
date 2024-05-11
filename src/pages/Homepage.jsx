import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import { Files } from '../components';

const Homepage = () => {
   return (
      <>
         {/* <Files/> */}
         <Container maxWidth="lg" >
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom>
                     PSTO-SDN File Management System
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                     <FolderIcon sx={{ fontSize: 48, mr: 2 }} />
                     <Typography variant="h5">Organize Your Files</Typography>
                  </Box>
                  <Typography variant="body1">
                     Easily create folders, upload files, and categorize them for a
                     streamlined workflow. Find what you need quickly and keep your files
                     organized.
                  </Typography>
                  <Link href="/files" underline="none">
                     <Typography variant="button" color="primary" sx={{ mt: 2 }}>
                        Browse Files
                     </Typography>
                  </Link>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                     <UploadIcon sx={{ fontSize: 48, mr: 2 }} />
                     <Typography variant="h5">Upload with Ease</Typography>
                  </Box>
                  <Typography variant="body1">
                     Upload single or multiple files with ease. Our system supports a wide
                     range of file formats, so you can store all your documents, images,
                     and videos in one place.
                  </Typography>
                  <Link href="/upload" underline="none">
                     <Typography variant="button" color="primary" sx={{ mt: 2 }}>
                        Upload Now
                     </Typography>
                  </Link>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                     <SearchIcon sx={{ fontSize: 48, mr: 2 }} />
                     <Typography variant="h5">Find Files Quickly</Typography>
                  </Box>
                  <Typography variant="body1">
                     Use our powerful search functionality to locate specific files based on
                     name, type, or keyword. Never waste time searching through folders
                     again.
                  </Typography>
                  <Link href="/search" underline="none">
                     <Typography variant="button" color="primary" sx={{ mt: 2 }}>
                        Search Files
                     </Typography>
                  </Link>
               </Grid>
            </Grid>
         </Container >
      </>
   );
};

export default Homepage;
