import SKU from '../models/SKU.js';

export const createSKU = async (req, res) => {
  try {
    const {
      sku_id,
      product_name,
      category,
      brand,
      unit_cost,
      selling_price,
      suppliers
    } = req.body;

    const skuExists = await SKU.findOne({ sku_id });
    if (skuExists) {
      return res.status(400).json({ error: 'SKU already exists' });
    }

    const newSKU = new SKU({
      sku_id,
      product_name,
      category,
      brand,
      unit_cost,
      selling_price,
      suppliers
    });

    await newSKU.save();
    return res.status(201).json({ message: 'SKU created successfully', sku: newSKU });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const getAllSKUs = async (req, res) => {
  try {
    const skus = await SKU.find().sort({ createdAt: -1 }); // recent first
    res.status(200).json(skus);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch SKUs', error: error.message });
  }
};

// DELETE
export const deleteSKU = async (req, res) => {
  try {
    const { id } = req.params;
    await SKU.findByIdAndDelete(id);
    res.status(200).json({ message: 'SKU deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete SKU', error: error.message });
  }
};

// UPDATE
export const updateSKU = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await SKU.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update SKU', error: error.message });
  }
};
