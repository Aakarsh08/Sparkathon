import mongoose from 'mongoose';

const skuSchema = new mongoose.Schema({
    sku_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    unit_cost: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    selling_price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // },
    suppliers: [
        {
            supplier: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Supplier',
                required: true
            },
            unit_cost: {
                type: mongoose.Types.Decimal128,
                required: true
            },
            lead_time_days: {
                type: Number,
                required: true
            },
            min_order_qty: {
                type: Number,
                required: true
            },
            last_updated: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true });

export default mongoose.model('SKU', skuSchema);
