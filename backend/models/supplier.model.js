import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  supplier_id: { type: String, required: true, unique: true, trim: true },
  supplier_name: { type: String, required: true, trim: true },
  contact_email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true }
}, { timestamps: true });

export default mongoose.model('Supplier', supplierSchema);
