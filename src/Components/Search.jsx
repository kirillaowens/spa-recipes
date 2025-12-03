import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        height: '50px',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 16 }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        value={value}
        placeholder="Search recipes..."
      />
      <IconButton disableRipple type="submit" sx={{ p: '10px' }} onClick={handleSubmit}>
        <SearchIcon sx={{ width: 30, height: 30 }} />
      </IconButton>
    </Paper>
  );
}

export default Search;
