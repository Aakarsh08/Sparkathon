import React from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from '@material-tailwind/react';

export default function SalesListDialog({ open, onClose }) {
  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Sales Records</DialogHeader>
      <DialogBody divider>
        {/* Ideally map over sales fetched from backend */}
        <Typography>Sales data will appear here.</Typography>
      </DialogBody>
      <DialogFooter>
        <Button onClick={onClose} color="red" variant="text">Close</Button>
      </DialogFooter>
    </Dialog>
  );
}
