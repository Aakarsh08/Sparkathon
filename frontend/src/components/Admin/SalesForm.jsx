import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

export default function SalesForm() {
  const [formData, setFormData] = useState({
    skuId: '',
    quantitySold: '',
    date: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting Sale:', formData);
    // send to backend...
  };

  return (
    <>
      <Typography variant="h5" className="mb-4">Add Sale</Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="SKU ID" name="skuId" onChange={handleChange} required />
        <Input label="Quantity Sold" name="quantitySold" type="number" onChange={handleChange} required />
        <Input label="Date" name="date" type="date" onChange={handleChange} required />
        <Button type="submit" fullWidth>Record Sale</Button>
      </form>
    </>
  );
}
