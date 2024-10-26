import React from 'react';
import { Box, Container } from '@mui/material';
import Terminal from '@/components/Terminal/Terminal';

const MainLayout = () => {
  return (
    <Container maxWidth="xl" sx={{ height: '100vh', py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Terminal />
      </Box>
    </Container>
  );
};

export default MainLayout;