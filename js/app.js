'use strict';
//create three variables; the array with products names, the all products array, and the total clicks variable.
var productNames = ['wine-glass','bag','banana','bathroom','boots','breakfast','bubblegum',    'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep',        'tauntaun','unicorn','usb','water-can'];
var allProducts = [];
var totalClicks = 0;

//create a constructor object for each product with a name, click count, view count and url for the image
function Product(name){
    this.name     = name;
    this.imageUrl = '../imgs/' + name + '.jpg';
    this.clicks   = 0;
    this.views    = 0;
    //then it adds it.. or pushes it.. to the allProducts array created just above.
    allProducts.push(this);
};