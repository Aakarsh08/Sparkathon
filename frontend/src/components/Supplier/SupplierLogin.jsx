import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import config from '../../config';

export default function SupplierLogin() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const emailOrId = event.target.emailOrId.value;
    const password = event.target.password.value;

    fetch(`${config.baseURL}/api/supplier/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailOrId, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('supplier-auth-token', data.token);
          navigate('/supplier-dashboard');
        } else {
          console.error('Login failed');
        }
      })
      .catch(err => console.error('Error:', err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card shadow={true} className="p-8 w-full max-w-md">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
          Supplier Sign In
        </Typography>
        <Typography color="gray" className="mb-6 text-center">
          Enter your credentials to access your dashboard.
        </Typography>
        <form onSubmit={handleLogin} className="space-y-6">
          <Input
            name="emailOrId"
            label="Email / Supplier ID"
            size="lg"
            required
            crossOrigin={undefined}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            size="lg"
            required
            crossOrigin={undefined}
          />
          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
        <Typography variant="small" className="mt-6 text-center">
          Don&apos;t have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate('/supplier-signup')}
          >
            Signup
          </span>
        </Typography>
      </Card>
    </div>
  );
}
