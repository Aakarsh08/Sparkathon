import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import SKUForm from './SKUForm';
import SalesForm from './SalesForm';
import SKUListDialog from './SKUListDialog';
import SalesListDialog from './SalesListDialog';

export default function AdminDashboard() {
  const [showSKUList, setShowSKUList] = useState(false);
  const [showSalesList, setShowSalesList] = useState(false);

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
