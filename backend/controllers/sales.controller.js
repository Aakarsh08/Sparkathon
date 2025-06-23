import SalesTransaction from '../models/SalesTransaction.js';

// CREATE SALE (your original logic preserved)
export const createSale = async (req, res) => {
  try {
    const {
      transaction_id,
      date,
      sku,
      quantity_sold,
      store_id,
      promotion_id
    } = req.body;

    const saleExists = await SalesTransaction.findOne({ transaction_id });
    if (saleExists) {
      return res.status(400).json({ error: 'Transaction already exists' });
    }

    const newSale = new SalesTransaction({
      transaction_id,
      date,
      sku,
      quantity_sold,
      store_id,
      promotion_id
    });

    await newSale.save();
    return res.status(201).json({ message: 'Sale recorded successfully', sale: newSale });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// GET ALL SALES
export const getAllSales = async (req, res) => {
  try {
    const sales = await SalesTransaction.find().populate('sku').sort({ createdAt: -1 });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch sales', error: error.message });
  }
};

// UPDATE SALE
export const updateSale = async (req, res) => {
  try {
    const updated = await SalesTransaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update sale', error: error.message });
  }
};

// DELETE SALE
export const deleteSale = async (req, res) => {
  try {
    await SalesTransaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete sale', error: error.message });
  }
};
