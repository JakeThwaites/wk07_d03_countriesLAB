const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countries = null;
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.countries = data;
    PubSub.publish('Countries:countries-loaded', this.countries);
  });
};

module.exports = Countries;
