const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const {
    getAllUsers,
    getAllRecords
} = require('../controllers/adminController');

router.get('/users', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.get('/records', authMiddleware, roleMiddleware('admin'), getAllRecords);

module.exports = router;