import AppBar from '@mui/material/AppBar';
import { Typography, Paper, Toolbar, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            height: '50px',
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1, fontSize: 16 }} placeholder="Search recipes..." />
          <IconButton disableRipple type="submit" sx={{ p: '10px' }}>
            <SearchIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Paper>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
