express = require('express'),
router = express.Router();

let Student = require('../models/Student');

// CREATE Student
router.route('/create-student').post(async(req, res, next) => {
		const Data = await Student.create(req.body)
		if(!Data) {
			return next(error)
		} else {
			console.log(Data)
			res.json(Data)
		}
})
// READ Students
router.route('/').get(async(req, res) => {
		try {
			const Data = await Student.find({});
			res.status(200).send(Data);
		} catch(error) {
			res.status(500).send(error);
		}
})
// Get Single Student
router.route('/edit-student/:id').get(async(req, res) => {
		try {
			const data = await Student.findById(req.params.id);
			if(!data) {
				return res.status(404);
			}
			res.status(200).send(data);
		} catch(error) {
			res.status(500).send(error);
		}
})
// Update Student
router.route('/update-student/:id').put(async(req, res, next) => {
		try {
			const data = await Student.findByIdAndUpdate(req.params.id, req.body, {
				new: true
			});
			if(!data) {
				return res.status(404).send();
			}
			res.status(200).send(data);
		} catch(error) {
			res.status(500).send(error);
		}
})
// Delete Student
router.route('/delete-student/:id').delete(async(req, res, next) => {
	try {
		const data = await Student.findByIdAndDelete(req.params.id);
		if(!data) {
			return res.status(404).send();
		}
		res.send(data);
	} catch(error) {
		res.status(500).send(error);
	}
})
module.exports = router;