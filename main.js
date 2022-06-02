const customerList = document.getElementById('customers');

for (let c of customers) {
    // import moment from 'moment';
    // moment().format();
    let moment = require('moment');
    
    // Creating a element for every customer entry
    let customerElement = document.createElement('div');
    customerElement.classList.add('entry');

    // Image
    let customerImg = document.createElement('img');
    customerImg.classList.add('img');
    customerImg.src = c.picture.large;
    customerElement.appendChild(customerImg);

    // Name
    let customerName = document.createElement('div');
    customerName.classList.add('name');
    customerName.innerText = `${c.name.first.charAt(0).toUpperCase() + c.name.first.slice(1)} ${c.name.last.charAt(0).toUpperCase() + c.name.first.slice(1)}`;  
    customerElement.appendChild(customerName);

    // Email
    let customerEmail = document.createElement('div');
    customerEmail.classList.add('email');
    customerEmail.innerText = c.email;
    customerElement.appendChild(customerEmail);

    // Address
    let customerAddress = document.createElement('div');
    customerAddress.classList.add('address');
    customerAddress.innerText = `${c.location.street.number} ${c.location.street.name} \b\r ${c.location.city}, STATE ${c.location.postcode}`;
    customerElement.appendChild(customerAddress);

    // DOB
    let customerDOB = document.createElement('div');
    customerDOB.classList.add('dob');
    customerDOB.innerText = `DOB: ${moment(c.dob.date).format('ll')}`;
    customerElement.appendChild(customerDOB);

    // Registered
    let customerRegistered = document.createElement('div');
    customerRegistered.classList.add('registered');
    customerRegistered.innerText = `Customer Since: ${moment(c.registered.date).format('ll')}`;
    customerElement.appendChild(customerRegistered);
    
    // Placing every entry into the main div
    customerList.appendChild(customerElement);
}