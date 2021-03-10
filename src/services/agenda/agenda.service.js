const Joi = require("joi");
const md5 = require("md5");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class AgendaService {
  constructor(AgendaModel) {
    this.AgendaModel = AgendaModel;

    this.getAgendas = this.getAgendas.bind(this);

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }

  
  async getAgendas() {
    const results = await this.AgendaModel.find();
    this._response = { status: true, data: results };
    return requestHelper.respondWithJsonBody(200, this._response);
  }
}
module.exports = AgendaService;
