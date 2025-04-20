
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Error = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1" component="div" color="error" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        الصفحة غير موجودة
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        عذرًا، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="/"
        sx={{ borderRadius: '30px', paddingX: 4, paddingY: 1 }}
      >
        العودة إلى الصفحة الرئيسية
      </Button>
    </Container>
  );
};

export default Error;
