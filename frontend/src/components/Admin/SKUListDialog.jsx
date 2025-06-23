import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
  IconButton,
  Input,
} from '@material-tailwind/react';
import config from '../../config';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export default function SKUListDialog({ open, onClose }) {
  const [skus, setSkus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSKU, setEditingSKU] = useState(null);

  const fetchSKUs = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      const res = await fetch(`${config.baseURL}/api/sku/getSKUs`, {
        headers: { 'auth-token': token },
      });
      const data = await res.json();
      setSkus(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch SKUs:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) fetchSKUs();
  }, [open]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('auth-token');
    const res = await fetch(`${config.baseURL}/api/sku/delete/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': token },
    });
    if (res.ok) fetchSKUs();
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('auth-token');
    const res = await fetch(`${config.baseURL}/api/sku/edit/${editingSKU._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify(editingSKU),
    });
    if (res.ok) {
      setEditingSKU(null);
      fetchSKUs();
    }
  };

  const handleEditChange = (e) => {
    setEditingSKU({ ...editingSKU, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Available SKUs</DialogHeader>
      <DialogBody divider className="max-h-[500px] overflow-y-auto">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : skus.length === 0 ? (
          <Typography>No SKUs found.</Typography>
        ) : (
          <ul className="space-y-4">
            {skus.map((sku) => (
              <li key={sku._id} className="border-b pb-2 flex justify-between items-start">
                <div>
                  <Typography variant="h6">{sku.product_name}</Typography>
                  <Typography className="text-sm text-gray-600">
                    SKU ID: {sku.sku_id} | Category: {sku.category} | Brand: {sku.brand}
                    <br />
                    Cost: ₹{parseFloat(sku.unit_cost)} | Price: ₹{parseFloat(sku.selling_price)}
                  </Typography>
                </div>
                <div className="flex space-x-2 mt-1">
                  <IconButton variant="text" onClick={() => setEditingSKU(sku)}>
                    <FiEdit className="text-blue-500" />
                  </IconButton>
                  <IconButton variant="text" onClick={() => handleDelete(sku._id)}>
                    <FiTrash2 className="text-red-500" />
                  </IconButton>
                </div>
              </li>
            ))}
          </ul>
        )}
      </DialogBody>

      {editingSKU && (
        <DialogBody className="mt-4 border-t pt-4">
          <Typography variant="h6">Edit SKU: {editingSKU.product_name}</Typography>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input label="Product Name" name="product_name" value={editingSKU.product_name} onChange={handleEditChange} />
            <Input label="Category" name="category" value={editingSKU.category} onChange={handleEditChange} />
            <Input label="Brand" name="brand" value={editingSKU.brand} onChange={handleEditChange} />
            <Input label="Unit Cost" name="unit_cost" value={parseFloat(editingSKU.unit_cost)} onChange={handleEditChange} />
            <Input label="Selling Price" name="selling_price" value={parseFloat(editingSKU.selling_price)} onChange={handleEditChange} />
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="text" onClick={() => setEditingSKU(null)}>Cancel</Button>
            <Button color="blue" onClick={handleUpdate}>Save</Button>
          </div>
        </DialogBody>
      )}

      <DialogFooter>
        <Button onClick={onClose} color="red" variant="text">Close</Button>
      </DialogFooter>
    </Dialog>
  );
}
