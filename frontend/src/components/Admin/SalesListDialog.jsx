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

export default function SalesListDialog({ open, onClose }) {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSale, setEditingSale] = useState(null);

  const fetchSales = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      const res = await fetch(`${config.baseURL}/api/sales/getSales`, {
        headers: { 'auth-token': token }
      });
      const data = await res.json();
      setSales(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch sales:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) fetchSales();
  }, [open]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('auth-token');
    await fetch(`${config.baseURL}/api/sales/delete/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': token }
    });
    fetchSales();
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('auth-token');
    await fetch(`${config.baseURL}/api/sales/edit/${editingSale._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify(editingSale)
    });
    setEditingSale(null);
    fetchSales();
  };

  const handleEditChange = (e) => {
    setEditingSale({ ...editingSale, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Sales Records</DialogHeader>
      <DialogBody divider className="max-h-[500px] overflow-y-auto">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : sales.length === 0 ? (
          <Typography>No sales records found.</Typography>
        ) : (
          <ul className="space-y-4">
            {sales.map((sale) => (
              <li key={sale._id} className="border-b pb-2 flex justify-between items-start">
                <div>
                  <Typography variant="h6">{sale.sku?.product_name || 'Unknown SKU'}</Typography>
                  <Typography className="text-sm text-gray-600">
                    Quantity: {sale.quantity_sold} | Date: {new Date(sale.date).toLocaleDateString()}<br />
                    Store ID: {sale.store_id || 'N/A'} | Promo ID: {sale.promotion_id || 'N/A'}
                  </Typography>
                </div>
                <div className="flex space-x-2 mt-1">
                  <IconButton variant="text" onClick={() => setEditingSale(sale)}>
                    <FiEdit className="text-blue-500" />
                  </IconButton>
                  <IconButton variant="text" onClick={() => handleDelete(sale._id)}>
                    <FiTrash2 className="text-red-500" />
                  </IconButton>
                </div>
              </li>
            ))}
          </ul>
        )}
      </DialogBody>

      {editingSale && (
        <DialogBody className="mt-4 border-t pt-4">
          <Typography variant="h6">Edit Sale Record</Typography>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input name="quantity_sold" label="Quantity Sold" type="number" value={editingSale.quantity_sold} onChange={handleEditChange} />
            <Input name="store_id" label="Store ID" value={editingSale.store_id || ''} onChange={handleEditChange} />
            <Input name="promotion_id" label="Promotion ID" value={editingSale.promotion_id || ''} onChange={handleEditChange} />
            <Input name="date" label="Date" type="date" value={editingSale.date?.slice(0, 10)} onChange={handleEditChange} />
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="text" onClick={() => setEditingSale(null)}>Cancel</Button>
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
