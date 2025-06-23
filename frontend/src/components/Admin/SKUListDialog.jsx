import React from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from '@material-tailwind/react';

export default function SKUListDialog({ open, onClose }) {
  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Available SKUs</DialogHeader>
      <DialogBody divider>
        {/* Ideally map over SKUs fetched from backend */}
        <Typography>Sample SKU list will be shown here.</Typography>
      </DialogBody>
      <DialogFooter>
        <Button onClick={onClose} color="red" variant="text">Close</Button>
      </DialogFooter>
    </Dialog>
  );
}
