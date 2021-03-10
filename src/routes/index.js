const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const agendaRoutes = require("./agenda.routes")

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/agenda",agendaRoutes)

module.exports = router;
