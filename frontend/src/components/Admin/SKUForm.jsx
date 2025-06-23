import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import config from '../../config';

export default function SKUForm() {
  const [formData, setFormData] = useState({
    sku_id: '',
    product_name: '',
    category: '',
    brand: '',
    unit_cost: '',
    selling_price: '',
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
      const res = await fetch(`${config.baseURL}/api/sku/create`, {
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
        alert('SKU created successfully!');
      } else {
        alert(`Error: ${data.error || data.message}`);
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <>
      <Typography variant="h5" className="mb-4">Add SKU</Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="SKU ID" name="sku_id" onChange={handleChange} required />
        <Input label="Product Name" name="product_name" onChange={handleChange} required />
        <Input label="Category" name="category" onChange={handleChange} required />
        <Input label="Brand" name="brand" onChange={handleChange} required />
        <Input label="Unit Cost" name="unit_cost" type="number" step="0.01" onChange={handleChange} required />
        <Input label="Selling Price" name="selling_price" type="number" step="0.01" onChange={handleChange} required />
        <Button type="submit" fullWidth>Add SKU</Button>
      </form>
    </>
  );
}
