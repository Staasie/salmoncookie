'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const tableElement = document.createElement('table');
document.body.appendChild(tableElement);

const state = {
  allCookieStands: [],
};

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}

// Prototype Methods
CookieStand.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

CookieStand.prototype.calcCookiesEachHour = function () {
  this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    // this.totalDailyCookies += oneHour;  this is added in an idk why
  }
};

CookieStand.prototype.render = function () {
  this.calcCookiesEachHour();
  const tableRow = document.createElement('tr');
  let tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeader = document.createElement('th');
  tableHeader.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
};

let seattle = new CookieStand('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('Lima', 2, 16, 4.6);
state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);


//this piece is in your demo but im not completly sure why as the code works with and without it?

// Array.prototype.sumTotal = function(){
//   let total = 0;
//   for (let i = 0; i < this.length; i++){
//     total += this[i];
//   }
//   return total;
// }

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Locations';
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location Totals';
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFooterRow() {
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Totals for All Locations';
  tableRow.appendChild(tableHeader);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < state.allCookieStands.length; j++) {
      hourlyTotal += state.allCookieStands[j].cookiesEachHour[i];
      totalOfTotals += state.allCookieStands[j].cookiesEachHour[i];
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

(function renderTable() {
  makeHeaderRow();
  for(let i = 0; i < state.allCookieStands.length; i++) {
    state.allCookieStands[i].render();
  }
  makeFooterRow();
})();





// MY CODE BEFORE I SWITCHED IT UP FOR REF FOR LATER!!




// 'use strict';

// function cookieStore(locationName, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale, cookiesPerHour);

//   this.locationName = locationName
//   this.minCustomerPerHour = minCustomerPerHour
//   this.maxCustomerPerHour = maxCustomerPerHour
//   this.avgCookiesPerSale = avgCookiesPerSale
//   this.cookiesPerHour = cookiesPerHour [],
//   this.cookiesEachHour = estimateSales(this);

// const tokyo = {
//   locationName: 'tokyo',
//   minCustomerPerHour: 1,
//   maxCustomerPerHour: 100,
//   avgCookiesPerSale: 1.0,
//   cookiesPerHour: [],
//   estimate: function () {
//     this.cookiesEachHour = estimateSales(this);
//   }
// };

// const dubai = {
//   locationName: 'dubai',
//   minCustomerPerHour: 1,
//   maxCustomerPerHour: 100,
//   avgCookiesPerSale: 1.0,
//   cookiesPerHour: [],
//   estimate: function () {
//     this.cookiesEachHour = estimateSales(this);
//   }
// };

// const paris = {
//   locationName: 'paris',
//   minCustomerPerHour: 1,
//   maxCustomerPerHour: 100,
//   avgCookiesPerSale: 1.0,
//   cookiesPerHour: [],
//   estimate: function () {
//     this.cookiesEachHour = estimateSales(this);
//   }
// };

// const lima = {
//   locationName: 'lima',
//   minCustomerPerHour: 1,
//   maxCustomerPerHour: 100,
//   avgCookiesPerSale: 1.0,
//   cookiesPerHour: [],
//   estimate: function () {
//     this.cookiesEachHour = estimateSales(this);
//   }
// };

// // store hours
// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// const stores = [seattle, tokyo, dubai, paris, lima];

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function estimateSales(store) {
//   const sales = [];
//   for (let i = 0; i < hours.length; i++) {
//     const numCustomers = random(store.minCustomerPerHour, store.maxCustomerPerHour);
//     const hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);
//     sales.push(hourSales);
//   }
//   return sales;
// }

// function render(store) {
//   let total = 0;

//   const root = document.getElementById('root');
//   if (!root) {
//     console.error("Root element not found. Make sure there's an element with id='root' in your HTML.");
//     return;
//   }

//   const location = document.createElement('section');
//   location.classList.add('location');
//   root.appendChild(location);

//   const title = document.createElement('h2');
//   title.textContent = store.locationName;
//   location.appendChild(title);

//   const list = document.createElement('ul');
//   location.appendChild(list);

//   for (let i = 0; i < hours.length; i++) {
//     total += store.cookiesEachHour[i];
//     const listItem = document.createElement('li');
//     listItem.textContent = hours[i] + ': ' + store.cookiesEachHour[i] + ' cookies';
//     list.appendChild(listItem);
//   }

//   const totalItem = document.createElement('li');
//   totalItem.textContent = 'Total: ' + total + ' cookies';
//   list.appendChild(totalItem);
// }

// function runApplication() {
//   for (let i = 0; i < stores.length; i++) {
//     stores[i].estimate();
//     render(stores[i]);
//   }
// }

// runApplication();