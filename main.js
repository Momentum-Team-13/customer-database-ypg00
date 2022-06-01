const customerList = document.getElementById('customers');
for (let c of customers) {
    // Each entry box
    let customerElement = document.createElement('div');
    customerElement.classList.add('entry');

    // Image
    let customerImg = document.createElement('img');
    customerImg.classList.add('img');
    customerImg.src = c.picture.large;
    customerElement.appendChild(customerImg);

    // 
    
    
    
    
    
    customerList.appendChild(customerElement);
}