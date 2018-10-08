//Task 1
console.log("External JavaScript");

//Task 2
function sumArray(arr){
    var sum=0;
    arr.forEach(function(value, index){
        sum = sum + value;
    });
    return sum;
}

console.log(sumArray([2,4,5,6,7]));
console.log(sumArray([7,43,5,6,7]));

//Task 3
function checkEmail(emailString){
    var emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("nada@gmail.com"));
console.log(checkEmail("vniaso.com"));

//Task 4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus(index){
    return library[index].readingStatus;
}

console.log(getReadingStatus(0));
console.log(getReadingStatus(1));
console.log(getReadingStatus(2));

//Task 5a
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

function addItem(newItem){
    cart.push(newItem); //push API adds to the array
    //console.log(cart);
}

var newItem = {
    name: 'Watch',
    price: 64,
    quantity: 1
};

addItem(newItem);

//Task 5b
function sortCart(keyName){
    if(keyName == "quantity"){
        cart.sort(function(a,b){
            return a.quantity - b.quantity;
        });
    }
    else if(keyName == "price"){
        cart.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    else{
        cart.sort(function(a, b) {
           var nameA = a.name.toUpperCase(); 
           var nameB = b.name.toUpperCase(); 
           if (nameA < nameB) {
               return -1;
           }
           if (nameA > nameB) {
               return 1;
               
           }
           return 0; 
        });
    }
    console.log(cart);
}

//sortCart("name");
sortCart("price");
//sortCart("quantity");

//Task 5c
function findByName(name){
    
}

//Task 5d
function totalPrice(){
    
}