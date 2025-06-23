import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const fetchAdmin = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ error: 'Access denied: No token provided' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.admin = { id: data.id };  // ✅ only stores admin ID
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Access denied: Invalid token' });
  }
};

export default fetchAdmin;
