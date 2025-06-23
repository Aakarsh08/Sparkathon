import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Typography } from '@material-tailwind/react';
import SKUForm from './SKUForm';
import SalesForm from './SalesForm';
import SKUListDialog from './SKUListDialog';
import SalesListDialog from './SalesListDialog';

export default function AdminDashboard() {
  const [showSKUList, setShowSKUList] = useState(false);
  const [showSalesList, setShowSalesList] = useState(false);
  const [loading, setLoading] = useState(true); // 🟡 Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token'); // 🔐 make sure key is correct
    if (!token) {
      navigate('/admin-login');
    } else {
      setLoading(false); // ✅ allow dashboard to render
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <Typography variant="h5">Checking authentication...</Typography>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <Typography variant="h3" className="mb-6">Admin Dashboard</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <SKUForm />
          <Button
            onClick={() => setShowSKUList(true)}
            className="mt-4"
            fullWidth
            variant="outlined"
          >
            View All SKUs
          </Button>
        </Card>

        <Card className="p-6">
          <SalesForm />
          <Button
            onClick={() => setShowSalesList(true)}
            className="mt-4"
            fullWidth
            variant="outlined"
          >
            View All Sales
          </Button>
        </Card>
      </div>

      <SKUListDialog open={showSKUList} onClose={() => setShowSKUList(false)} />
      <SalesListDialog open={showSalesList} onClose={() => setShowSalesList(false)} />
    </div>
  );
}
