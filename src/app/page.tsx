'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 12 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Dashboard
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Please login or register to continue
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/auth/login')}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push('/auth/register')}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}
