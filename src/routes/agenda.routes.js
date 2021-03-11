const router = require("express").Router();
const requestHelper = require("../common/request_helper");
const { agendaService } = require("../services/index");
const jwtMiddleWare = require("../middleware/jwt-auth");

router.get("/getAllAgenda", jwtMiddleWare, async (req, res) => {
  const result = await agendaService.getAgendas();
  return requestHelper.handleResponse(res, result);
});
router.post("/createAgenda", jwtMiddleWare, async (req, res) => {
  const result = await agendaService.createAgenda(req);
  return requestHelper.handleResponse(res, result);
});

module.exports = router;
