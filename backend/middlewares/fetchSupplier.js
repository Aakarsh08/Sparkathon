import jwt from 'jsonwebtoken';
import Supplier from '../models/supplier.model.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const supplierAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const supplier = await Supplier.findById(decoded.id).select('-password');

    if (!supplier) {
      return res.status(401).json({ message: 'Invalid token: Supplier not found' });
    }

    req.supplier = supplier;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token', error: err.message });
  }
};

export default supplierAuth;
