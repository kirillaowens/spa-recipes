import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{
        bottom: 0,
        mt: 'auto',
        bgcolor: '#ff8b42',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Recipes App. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
