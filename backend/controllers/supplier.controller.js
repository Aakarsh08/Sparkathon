import Supplier from '../models/supplier.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const supplierSignup = async (req, res) => {
  try {
    const { supplier_id, supplier_name, contact_email, password, phone, address } = req.body;

    const existingSupplier = await Supplier.findOne({
      $or: [{ contact_email }, { supplier_id }]
    });

    if (existingSupplier) {
      return res.status(400).json({ message: 'Email or Supplier ID already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSupplier = new Supplier({
      supplier_id,
      supplier_name,
      contact_email,
      password: hashedPassword,
      phone,
      address
    });

    await newSupplier.save();

    return res.status(201).json({ message: 'Supplier registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Signup failed', error: error.message });
  }
};

export const supplierLogin = async (req, res) => {
  try {
    const { emailOrId, password } = req.body;

    const supplier = await Supplier.findOne({
      $or: [{ contact_email: emailOrId }, { supplier_id: emailOrId }]
    });

    if (!supplier) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, supplier.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: supplier._id }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
