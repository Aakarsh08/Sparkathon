import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

export default function SKUForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: '',
    supplierId: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting SKU:', formData);
    // send to backend...
  };

  return (
    <>
      <Typography variant="h5" className="mb-4">Add SKU</Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="Name" name="name" onChange={handleChange} required />
        <Input label="Category" name="category" onChange={handleChange} required />
        <Input label="Price" name="price" type="number" onChange={handleChange} required />
        <Input label="Stock Quantity" name="stockQuantity" type="number" onChange={handleChange} required />
        <Input label="Supplier ID" name="supplierId" onChange={handleChange} required />
        <Button type="submit" fullWidth>Add SKU</Button>
      </form>
    </>
  );
}
