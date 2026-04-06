const Record = require('../models/Record');

// Create Record
exports.createRecord = async (req, res, next) => {
    try {
        const record = await Record.create({
            userId: req.user.id,
            ...req.body
        });
        res.status(201).json(record);
    } catch (error) {
        next(error);
    }
};

// Get Records with filter, date range, pagination
exports.getRecords = async (req, res, next) => {
    try {
        const { type, startDate, endDate, page = 1, limit = 5 } = req.query;

        let filter = { userId: req.user.id };

        // Filter by type
        if (type) {
            filter.type = type;
        }

        // Filter by date range
        if (startDate && endDate) {
            filter.createdAt = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const records = await Record.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        res.json(records);

    } catch (error) {
        next(error);
    }
};

// Get Single Record
exports.getRecordById = async (req, res, next) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        // Authorization check
        if (record.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized" });
        }

        res.json(record);
    } catch (error) {
        next(error);
    }
};

// Update Record
exports.updateRecord = async (req, res, next) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        // Only owner or admin
        if (record.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized" });
        }

        record.amount = req.body.amount || record.amount;
        record.type = req.body.type || record.type;
        record.category = req.body.category || record.category;
        record.description = req.body.description || record.description;

        const updatedRecord = await record.save();
        res.json(updatedRecord);

    } catch (error) {
        next(error);
    }
};

// Delete Record
exports.deleteRecord = async (req, res, next) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        // Only owner or admin
        if (record.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized" });
        }

        await record.deleteOne();

        res.json({ message: "Record deleted successfully" });

    } catch (error) {
        next(error);
    }
};

// Get Summary
exports.getSummary = async (req, res, next) => {
    try {
        const records = await Record.find({ userId: req.user.id });

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach(record => {
            if (record.type === "income") {
                totalIncome += record.amount;
            } else {
                totalExpense += record.amount;
            }
        });

        res.json({
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense
        });

    } catch (error) {
        next(error);
    }
};