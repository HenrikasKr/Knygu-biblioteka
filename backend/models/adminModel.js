const mongoose = require("mongoose");

const loggingSchema = new mongoose.Schema({
    date_created: {
        type: Date,
        unmodifiable: true,
      },
    email: {
        type: String,
    },
    action: {
        type: String,
    },
    subID: {
        type: String,
    },
});

const Log = new mongoose.model("Log", loggingSchema);

// Duomenų siuntimas į DB
// const addLog = new Log({

//     email: "test@gmail.com",
//     action: "Prisijungta",
// });

// addLog.save();

module.exports = Log;