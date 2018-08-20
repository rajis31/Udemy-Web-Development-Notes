//Exercise
// 1. Create a new directory called 'MyShop'
// Answer: mkdir MyShop
//paperjs-v0.11.5
// 2. Add a file name 'listProduct.js'
// Answer: New-item 'listProduct.js'
//3. User Faker to print out 10 random product names and prices
//Faker is a great package for generating random items

var fake = require('faker');
var city;
var prod;
//console.log(fake.internet.email());

for(i=1; i<=10;i++)
{
  city=fake.address.city();
  prod=fake.commerce.productName();
  console.log(city+" - "+prod);
}
