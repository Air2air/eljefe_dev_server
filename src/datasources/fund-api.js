const { RESTDataSource } = require('apollo-datasource-rest');

class FundAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getFundsForHome() {
    return this.get('funds');
  }

  getManager(managerId) {
    return this.get(`manager/${managerId}`);
  }

  getFund(fundId) {
    return this.get(`fund/${fundId}`);
  }

  getFundSymbols(fundId) {
    return this.get(`fund/${fundId}/symbols`);
  }

  getSymbol(symbolId) {
    const moduleId = symbolId; // For the Apollo API
    return this.get(`symbol/${moduleId}`);
  }
}

module.exports = FundAPI;
