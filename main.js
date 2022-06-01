const customerList = document.getElementById('customers');
for (let c of customers) {
    
    // Creating a box for each entry
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
    let customerEmail = document.createElement('div'); // creating element
    customerEmail.classList.add('email'); // add a class to the element
    customerEmail.innerText = c.email; // filling the element with innerText
    customerElement.appendChild(customerEmail); // putting email element into the customer element (i.e. .entry)

    // Address
    let customerAddress1 = document.createElement('div');
    customerAddress1.classList.add('address');
    customerAddress1.innerText = `${c.location.street.number} ${c.location.street.name}`;
    customerElement.appendChild(customerAddress1);

    let customerAddress2 = document.createElement('div');
    customerAddress2.classList.add('address');
    customerAddress2.innerText = `${c.location.city}, STATE ${c.location.postcode}`;
    customerElement.appendChild(customerAddress2);

    // DOB

    // Registered
    
    // Placing every entry into the "big" div
    customerList.appendChild(customerElement);
}