'use strict'

index.html
const seattle = {
loactionName: 'seattle',
minCustomerPerHour: 10,
MaxCostomerPerHour: 10,
avgCookiesPerSAle: 10,
cookiesPerHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}
}

const Tokyo = {
loactionName: 'Tokyo',
minCustomerPerHour: 10,
MaxCostomerPerHour: 10,
avgCookiesPerSAle: 10,
cookiesPerHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}
}

const Dubai = {
loactionName: 'Dubai',
minCustomerPerHour: 10,
MaxCostomerPerHour: 10,
avgCookiesPerSAle: 10,
cookiesPerHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}
}

const Paris = {
loactionName: 'Paris',
minCustomerPerHour: 10,
MaxCostomerPerHour: 10,
avgCookiesPerSAle: 10,
cookiesPerHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}
}

const Lima = {
loactionName: 'Lima',
minCustomerPerHour: 10,
MaxCostomerPerHour: 10,
avgCookiesPerSAle: 10,
cookiesPerHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}
}


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
const stores = [Seattle, Tokyo, Dubai, Paris, Lima]


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function estimateSales(store) {
  const sales = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = random(store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
}

function render(store) {

  let total = 0;

  const root = document.getElementById('root');

  // Create a section, with a class of "location" for each store
  const location = document.createElement('section')
  location.classList.add('location');
  root.appendChild(location);

  // In the section, add a title
  const title = document.createElement('h2');
  title.textContent = store.locationName;
  location.appendChild(title);

  // Create a UL to hold the hour totals
  const list = document.createElement('ul');
  location.appendChild(list);

  // Each hour - make a new list item with the estimated total
  for (let i = 0; i < hours.length; i++) {
    total += store.cookiesEachHour[i];
    const listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + store.cookiesEachHour[i] + ' cookies';
    list.appendChild(listItem);
  }

  // Last item in the list - total
  const totalItem = document.createElement('li');
  totalItem.textContent = 'Total: ' + total + ' cookies';
  list.appendChild(totalItem);
}


// Render them all ...
function runApplication() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].estimate();
    render(stores[i]);
  }
}

runApplication();