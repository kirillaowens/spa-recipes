import AppBar from '@mui/material/AppBar';
import { Toolbar, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#ff8b42' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MuiLink
          component={RouterLink}
          color="inherit"
          to="/"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            textDecoration: 'none',
            color: 'inherit',
            fontSize: 24,
          }}
        >
          Recipes
        </MuiLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
