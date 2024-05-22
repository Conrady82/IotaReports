const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");
const eventController = require("../controllers/eventController");
const reportController = require("../controllers/reportController");
const uploadController = require("../controllers/uploadController");

const router = express.Router();
const upload = multer();

// User routes
router.post("/login", userController.login);
router.post("/register", userController.register);

// Event routes
router.get("/events", eventController.getAllEvents);
router.post("/events", eventController.createEvent);
router.get("/events/:id", eventController.getEventById);
router.put("/events/:id", eventController.updateEvent);
router.delete("/events/:id", eventController.deleteEvent);

// Report routes
router.get("/reports", reportController.getAllReports);
router.post("/reports", reportController.createReport);
router.get("/reports/:id", reportController.getReportById);
router.put("/reports/:id", reportController.updateReport);
router.delete("/reports/:id", reportController.deleteReport);

// File upload route
router.post("/upload", upload.single("file"), uploadController.uploadFile);

module.exports = router;
