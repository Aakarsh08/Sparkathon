import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import config from '../../config';

export function AdminSignup() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${config.baseURL}/api/admin/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Signup successful:', data.message);
        navigate('/admin-login');
      } else {
        console.error('Signup failed:', data.message || 'Unknown error');
      }
    } catch (err) {
      console.error('Error:', err.message || err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Admin Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 text-center">
          Create an account to ....
        </Typography>
        <form onSubmit={handleSignup} className="mt-6 flex flex-col gap-4">
          <Input label="Username" name="username" required size="lg" />
          <Input label="Email" name="email" type="email" required size="lg" />
          <Input label="Password" name="password" type="password" required size="lg" />
          <Input label="Confirm Password" name="confirmPassword" type="password" required size="lg" />
          <Button type="submit" className="mt-4" fullWidth>
            Sign Up
          </Button>
        </form>
        <Typography variant="small" className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate('/admin-login')}
          >
            Sign in
          </span>
        </Typography>
      </Card>
    </div>
  );
}
