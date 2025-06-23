import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import config from '../../config';

export default function SalesForm() {
  const [formData, setFormData] = useState({
    transaction_id: '',
    sku: '',
    quantity_sold: '',
    date: '',
    store_id: '',
    promotion_id: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');

    try {
      const res = await fetch(`${config.baseURL}/api/sales/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert('Sale recorded successfully!');
      } else {
        alert(`Error: ${data.error || data.message}`);
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <>
      <Typography variant="h5" className="mb-4">Add Sale</Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="Transaction ID" name="transaction_id" onChange={handleChange} required />
        <Input label="SKU ID (MongoDB _id)" name="sku" onChange={handleChange} required />
        <Input label="Quantity Sold" name="quantity_sold" type="number" onChange={handleChange} required />
        <Input label="Date" name="date" type="date" onChange={handleChange} required />
        <Input label="Store ID" name="store_id" onChange={handleChange} />
        <Input label="Promotion ID" name="promotion_id" onChange={handleChange} />
        <Button type="submit" fullWidth>Record Sale</Button>
      </form>
    </>
  );
}
