import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    cb(value.trim());
  };

  return (
    <Paper
      component="form"
      elevation={0}
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        height: '50px',
        border: '1px solid #ff8a4296',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 16 }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Search recipes..."
      />
      <IconButton disableRipple type="submit" sx={{ p: '10px' }}>
        <SearchIcon sx={{ width: 30, height: 30 }} />
      </IconButton>
    </Paper>
  );
}

export default Search;
