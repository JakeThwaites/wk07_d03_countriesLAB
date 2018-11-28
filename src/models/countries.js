const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countries = null;
};


Countries.prototype.bindEvents = function () {
  this.getData();
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryInfo(selectedIndex);
  });
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.countries = data;
    PubSub.publish('Countries:countries-loaded', this.countries);
  });
};

Countries.prototype.publishCountryInfo = function (index) {
  const selectedCountry = this.countries[index];
  PubSub.publish('Countries:selected-country-info', selectedCountry);
};

module.exports = Countries;
