const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { getSummary } = require('../controllers/recordController');


const {
    createRecord,
    getRecords,
    getRecordById,
    updateRecord,
    deleteRecord
} = require('../controllers/recordController');

// Create record - Admin only
router.post('/', authMiddleware, roleMiddleware('admin'), createRecord);

// Get records
router.get('/', authMiddleware, getRecords);

// Get Summary (Total Income, Total Expense, Balance)
router.get('/summary', authMiddleware, getSummary);

// Get single record
router.get('/:id', authMiddleware, getRecordById);

// Update record
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateRecord);

// Delete record
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteRecord);



module.exports = router;