import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MoreIcon from '@mui/icons-material/MoreVert';

const options = ['Files', 'Upload'];

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOption = (option) => {
    // Implement logic based on the chosen option (Files, Upload)
    console.log('Selected option:', option);
    handleClose();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            {/* You can add your logo or app name here */}
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              Your App Name
            </Typography>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            Your App Name
          </Typography>
          <div>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton size="large" aria-label="upload" color="inherit">
              <UploadFileIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'account-menu' }}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={() => handleMenuOption(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
