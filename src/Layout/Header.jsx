import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#ff8b42' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          href="#app"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Recipes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
