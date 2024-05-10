import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

const files = [
  { id: 1, filename: 'report.pdf', size: '10 MB', dateUploaded: '2024-05-07' },
  { id: 2, filename: 'presentation.pptx', size: '5 MB', dateUploaded: '2024-05-06' },
  { id: 3, filename: 'image.jpg', size: '2 MB', dateUploaded: '2024-05-05' },
  { id: 4, filename: 'report.pdf', size: '10 MB', dateUploaded: '2024-05-07' },
  { id: 5, filename: 'presentation.pptx', size: '5 MB', dateUploaded: '2024-05-06' },
  { id: 6, filename: 'image.jpg', size: '2 MB', dateUploaded: '2024-05-05' },
  { id: 7, filename: 'report.pdf', size: '10 MB', dateUploaded: '2024-05-07' },
  { id: 8, filename: 'presentation.pptx', size: '5 MB', dateUploaded: '2024-05-06' },
  { id: 9, filename: 'image.jpg', size: '2 MB', dateUploaded: '2024-05-05' },
  { id: 10, filename: 'report.pdf', size: '10 MB', dateUploaded: '2024-05-07' },
  { id: 11, filename: 'presentation.pptx', size: '5 MB', dateUploaded: '2024-05-06' },
  { id: 12, filename: 'image.jpg', size: '2 MB', dateUploaded: '2024-05-05' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'filename', headerName: 'Filename', width: 150 },
  { field: 'size', headerName: 'Size', width: 100 },
  { field: 'dateUploaded', headerName: 'Date Uploaded', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => (
      <Button variant="contained" color="error" onClick={() => handleDelete(params.id)}>
        Delete
      </Button>
    ),
  },
];

const handleDelete = (id) => {
  // Simulate delete functionality
  console.log(`Deleting file with ID: ${id}`);
  // Update data source to remove the deleted file
  const updatedFiles = files.filter((file) => file.id !== id);
  // (Optional) Update the table state with the updated data
};

export default function Files() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{height: 400, width: '60%', alignItems: 'center' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={10}> {/* Adjust xs value for desired table width */}
            <DataGrid
              rows={files}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              alignItems="center"
              checkboxSelection
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
