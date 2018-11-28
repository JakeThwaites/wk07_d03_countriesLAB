const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const infoDiv = document.querySelector('div#country');
  const countryInfoView = new CountryInfoView(infoDiv);
  countryInfoView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
});
