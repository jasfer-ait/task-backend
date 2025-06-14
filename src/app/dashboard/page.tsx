'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Container, Box } from '@mui/material';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login'); // Redirect to login if no token
    } else {
      setIsLoading(false); // Authenticated
    }
  }, [router]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Welcome to your Dashboard</Typography>
        <Typography>You are logged in!</Typography>
      </Box>
    </Container>
  );
}
