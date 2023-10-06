function CreateAddress(street, city, zipcode) {
    this.street = street,
    this.city  = city,
    this.zipcode = zipcode,
    this.showAddress =  function() {
        console.log('address');
    };
    return this;
}

const address = new CreateAddress('q','a', 'l');
console.log('street:'+address.street);


//factory function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode,
        showAddress: function() {

        }
    }
}

const newAddress = createAddress('l','b','c');

//object literal

let addressObj =  {
    street: 'q',
    city: 'w',
    zipcode: 'f',
}

function showAddress(addressObj) {
    for(let keys in addressObj) {
        console.log(key)
;    }
 }