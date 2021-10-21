const { RESTDataSource } = require('apollo-datasource-rest');

class JefeAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getFundsListForPortfolio() {
    return this.get('funds');
  }

  getManager(fundId) {
    return this.get(`fund/${fundId}/manager`);
  }

  getFund(fundId) {
    return this.get(`fund/${fundId}`);
  }

  getFundSymbols(fundId) {
    return this.get(`fund/${fundId}/symbols`);
  }

  getSymbol(symbolId) {
    return this.get(`symbol/${fundId}`);
  }
}

module.exports = JefeAPI;
