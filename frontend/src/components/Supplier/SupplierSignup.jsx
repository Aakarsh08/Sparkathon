import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import config from '../../config';

export function SupplierSignup() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const supplier_id = e.target.supplier_id.value;
    const supplier_name = e.target.supplier_name.value;
    const contact_email = e.target.contact_email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${config.baseURL}/api/supplier/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supplier_id,
          supplier_name,
          contact_email,
          password,
          phone,
          address,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Signup successful:', data.message);
        navigate('/supplier-login');
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
          Supplier Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 text-center">
          Create your supplier account
        </Typography>
        <form onSubmit={handleSignup} className="mt-6 flex flex-col gap-4">
          <Input label="Supplier ID" name="supplier_id" required size="lg" />
          <Input label="Supplier Name" name="supplier_name" required size="lg" />
          <Input label="Email" name="contact_email" type="email" required size="lg" />
          <Input label="Phone" name="phone" required size="lg" />
          <Input label="Address" name="address" required size="lg" />
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
            onClick={() => navigate('/supplier-login')}
          >
            Sign in
          </span>
        </Typography>
      </Card>
    </div>
  );
}
