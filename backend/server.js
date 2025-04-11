require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const linenRoutes = require('./routes/linenRoutes');
app.use('/api/linens', linenRoutes);

const publicAreaRoutes = require('./routes/publicAreaRoutes');
app.use('/api/public-areas', publicAreaRoutes);

const specialServiceRoutes = require('./routes/specialServiceRoutes');
app.use('/api/special-services', specialServiceRoutes);

const inhouseLaundryRoutes = require('./routes/inhouseLaundryRoutes');
app.use('/api/inhouse-laundry', inhouseLaundryRoutes);

const guestLaundryRoutes = require('./routes/guestLaundryRoutes');
app.use('/api/guest-laundry', guestLaundryRoutes);

const roomRoutes = require('./routes/roomRoutes');
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
