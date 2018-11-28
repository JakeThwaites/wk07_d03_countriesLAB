const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function (container) {
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-info', (event) => {
    const country = event.detail;
    this.render(country);
  });
};

CountryInfoView.prototype.render = function (country) {
  const countryName = this.createElement('h2', country.name);
  const countryFlag = document.createElement('img');
  countryFlag.setAttribute('src', `${country.flag}`);
  countryFlag.setAttribute('id', 'country-flag')
  const countryLanguages = this.createLanguageList(country);
  countryLanguages.setAttribute('id', 'country-languages')
  const countryRegion = this.createElement('p', country.region);

  this.container.innerHTML = '';
  this.container.appendChild(countryName);
  this.container.appendChild(countryFlag);
  this.container.appendChild(countryRegion);
  this.container.appendChild(countryLanguages);
};

CountryInfoView.prototype.createElement = function (elementType, textContent) {
  const newElement = document.createElement(elementType);
  newElement.textContent = textContent;
  return newElement;

};

CountryInfoView.prototype.createLanguageList = function (country) {
  const list = document.createElement('ul');
  const languages = country.languages;

  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });

  return list;
};


module.exports = CountryInfoView;
