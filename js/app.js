'use strict';

//create three variables; the array with products names, the all products array, and the total clicks variable.

var productNames = ['wine-glass','bag','banana','bathroom','boots','breakfast','bubblegum',    'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep',        'tauntaun','unicorn','usb','water-can'];
// console.log(productNames);
var allProducts = [];
var totalClicks = 0;

//create a constructor object for each product with a name, click count, view count and url for the image

function Product(name){
    this.name     = name;
    this.imageUrl = '../img/' + name + '.jpg';
    this.clicks   = 0;
    this.views    = 0;
    //then it adds it.. or pushes it.. to the allProducts array created just above.
    allProducts.push(this);
};

//create a for loop that iterates through the productNames array and creates an object from each using the Product object-constructor right above.

function createProducts() {
for (var i = 0; i < productNames.length; i++) {
    new Product(productNames[i]);
}

//check in the console with a TABLE, which is good for objects

// console.table(allProducts)
};
//then we want to display 3 images side by side that are RANDOMLY pulled from the allProducts array, which now consists of an object with views and clicks, name and url for an image.
//So lets start with a random function

function randomProduct() {
   return Math.floor(Math.random() * allProducts.length);
}

//create a function to render three random images without duplicates VVV

function render() {
    var productsSection = document.getElementById('pics'); //new variable that contains the pics section in html
    productsSection.innerHTML = ''; //clear out previous shtuff with an empty string

//randomProducts array and using the index numbers in a while loop
    var randomProducts = []; //create an array to hold the three objects

    randomProducts.push(randomProduct()); //add the first to the 0 index
    randomProducts.push(randomProduct());       //add the second to the 1 index
    while(randomProducts[0] === randomProducts[1]) {    //while loop to make sure first two are not same
            randomProducts[1] = randomProduct(); 
        }   //if they are the same, randomize the second one
    randomProducts.push(randomProduct());   //then add a third to the 2 index
    while(randomProducts[2] === randomProducts [0] || randomProducts[2] === randomProducts[1]) { //make sure 3 is not equal to 1, or the 2nd image is not the same as the first
        randomProducts[2] = randomProduct(); //if it is the same as either of the first three, randomize that shiat.
       
    }  
     //test it
// console.log('random product', randomProduct);
    
    for(var i = 0; i<3; i++) {     //for loop in the render function to choose 3  
        allProducts[randomProducts[i]].views++   // random products from the all products array and increment views
        var img = document.createElement('img');  //create an img tag in html
        img.setAttribute('src',allProducts[randomProducts[i]].imageUrl);  //sets the source of each one
        img.setAttribute('data-name', allProducts[randomProducts[i]].name); //sets a name for each
        img.addEventListener('click', handleVote); // adds event listener to make a click count as a vote/view
        productsSection.appendChild(img);       //adds image variable to the productsSection aka pics in the html
    };
};

//now we need to make that handleVote function we just used in the event listener
    function handleVote(event) {  //create a new function called handleVote that is an event
        var productName = event.target.dataset.name;  //the name is given a vote when you click
        for(var i = 0;i < allProducts.length;i++){   // for loop inside function handleVote to iterate through allProducts
            if(allProducts[i].name === productName) {  //if then statement for allProducts to
                allProducts[i].clicks++                 //to increment clicks on object
                totalClicks++                               //and the total clicks variable is incremented.
                render();                           //then you call the render function to clear old pics and data
            }
        }
    

    // then we want to stop when the total clicks is 25 and remove the click function
    if(totalClicks === 25) {                                //if statement, if the total clicks reached 25 clicks then..
        var imgs = document.getElementsByTagName('img');  //create a variable called images that grabs the image tags in the DOM
        for(var i = 0;i<imgs.length;i++){              //and runs a for loop through it to 
            imgs[i].removeEventListener('click', handleVote);  //remove the event listener to stop game
        }
        displayResults(); // call a function to display results, which we make below here
    }
    console.table(allProducts);  // test and check sections
    console.log('total clicks', totalClicks);
    }
    function displayResults(){          //creates function displayResults to
        var results = document.getElementById('sideBar');  // create variable results that finds a results id
        var ul = document.createElement('ul');            // and creates an unordered list 
        for(var i = 0; i < allProducts.length; i++) {    // and a for loop to iterate through the allProducts
            var product = allProducts[i];               // and store each object as product variable
            var li = document.createElement('li');    // and create a list 
            li.textContent = product.name + ' has ' + product.clicks + ' votes.'; // with a script that has the clicks written as votes
            ul.appendChild(li); //and finally appends this list element to the unordered list.
        }
        results.appendChild(ul);  
    }

    createProducts();  //then we create the objects
    render();         // and return to sender render a blender bender.