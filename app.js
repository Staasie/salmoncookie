'use strict';

const seattle = {
  locationName: 'seattle',
  minCustomerPerHour: 1,
  maxCustomerPerHour: 100,
  avgCookiesPerSale: 1.0,
  cookiesPerHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const tokyo = {
  locationName: 'tokyo',
  minCustomerPerHour: 1,
  maxCustomerPerHour: 100,
  avgCookiesPerSale: 1.0,
  cookiesPerHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const dubai = {
  locationName: 'dubai',
  minCustomerPerHour: 1,
  maxCustomerPerHour: 100,
  avgCookiesPerSale: 1.0,
  cookiesPerHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const paris = {
  locationName: 'paris',
  minCustomerPerHour: 1,
  maxCustomerPerHour: 100,
  avgCookiesPerSale: 1.0,
  cookiesPerHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const lima = {
  locationName: 'lima',
  minCustomerPerHour: 1,
  maxCustomerPerHour: 100,
  avgCookiesPerSale: 1.0,
  cookiesPerHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

// store hours
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [seattle, tokyo, dubai, paris, lima];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimateSales(store) {
  const sales = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = random(store.minCustomerPerHour, store.maxCustomerPerHour);
    const hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
}

function render(store) {
  let total = 0;

  const root = document.getElementById('root');
  if (!root) {
    console.error("Root element not found. Make sure there's an element with id='root' in your HTML.");
    return;
  }

  const location = document.createElement('section');
  location.classList.add('location');
  root.appendChild(location);

  const title = document.createElement('h2');
  title.textContent = store.locationName;
  location.appendChild(title);

  const list = document.createElement('ul');
  location.appendChild(list);

  for (let i = 0; i < hours.length; i++) {
    total += store.cookiesEachHour[i];
    const listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + store.cookiesEachHour[i] + ' cookies';
    list.appendChild(listItem);
  }

  const totalItem = document.createElement('li');
  totalItem.textContent = 'Total: ' + total + ' cookies';
  list.appendChild(totalItem);
}

function runApplication() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].estimate();
    render(stores[i]);
  }
}

runApplication();
