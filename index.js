const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const getAllPatients = require("./routes/api/getAllPatients");
const getPatientByID = require("./routes/api/getPatientByID");
const createPatient = require("./routes/api/createPatient");
const editPatientByID = require("./routes/api/editPatientByID");
const deletePatientByID = require("./routes/api/deletePatientByID");
const LoginRegisterRoute = require("./routes/LoginRegisterRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const DashboardRoute = require("./routes/DashboardRoute.js");
const PatientRoute = require("./routes/PatientRoute.js");
const DoctorRoute = require("./routes/DoctorRoute.js");
const AppointmentRoute = require("./routes/AppointmentRoute.js");
const MedicineRoute = require("./routes/MedicineRoute.js");
const PrescriptionRoute = require("./routes/PrescriptionRoute.js");
const InvoiceRoute = require("./routes/InvoiceRoute.js");
const ProfileRoute = require("./routes/ProfileRoute.js");
const passwordResetRoutes = require("./routes/passwordReset.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true });


app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
})

app.use(LoginRegisterRoute);
app.use(DashboardRoute);
app.use(UserRoute);
app.use(PatientRoute);
app.use(DoctorRoute);
app.use(AppointmentRoute);
app.use(MedicineRoute);
app.use(PrescriptionRoute);
app.use(InvoiceRoute);
app.use(ProfileRoute);
//app.use(passwordResetRoutes);

app.use('/api/paypal', require('./routes/api/paypal'));

app.use("/api/password-reset", passwordResetRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
});

