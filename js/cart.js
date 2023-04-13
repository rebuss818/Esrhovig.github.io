let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        image: '7.PNG' ,
        price: 2000
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

//  function reloadCard(){ //
    // ...existing code...
    //whatsapp, email checkout//



    const emailButton = document.querySelector('#email-btn');
    const whatsappButton = document.querySelector('#whatsapp-btn');
    
    let deliveryMethod = 'whatsapp';
    
    emailButton.addEventListener('click', () => {
      deliveryMethod = 'email';
    });
    
    whatsappButton.addEventListener('click', () => {
      deliveryMethod = 'whatsapp';
    });
    
    checkoutButton.addEventListener('click', () => {
      if (deliveryMethod === 'whatsapp') {
        sendWhatsAppMessage();
      } else if (deliveryMethod === 'email') {
        sendEmailMessage();
      }
    });
    
    function sendWhatsAppMessage() {
      const message = `Order Details:\n`;
      listCards.forEach((item) => {
          message += `${item.name} (${item.quantity}) - ${item.price.toLocaleString()}\n`;
      });
      message += `Total Price: ${total.innerText}\n\nPlease enter your email and phone number to complete the order.`;
    
      const phoneNo = "+2349046810587";
      const whatsappLink = `https://wa.me/${+2349046810587}?text=${encodeURIComponent(message)}`;
    
      window.open(whatsappLink);
    }
    
    function sendEmailMessage() {
      const message = `Order Details:\n`;
      listCards.forEach((item) => {
          message += `${item.name} (${item.quantity}) - ${item.price.toLocaleString()}\n`;
      });
      message += `Total Price: ${total.innerText}\n\nPlease enter your phone number to complete the order.`;
    
      const email = "youremail@example.com";
      const subject = "New Order";
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
      window.location.href = mailtoLink;
    }
    




