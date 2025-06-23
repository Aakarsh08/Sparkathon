import mongoose from 'mongoose';

const salesTransactionSchema = new mongoose.Schema({
    transaction_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    sku: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SKU',
        required: true
    },
    quantity_sold: {
        type: Number,
        required: true,
        min: 1
    },
    store_id: {
        type: String,
        trim: true
    },
    promotion_id: {
        type: String,
        trim: true
    }
}, { timestamps: true });

export default mongoose.model('SalesTransaction', salesTransactionSchema);
