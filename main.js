(function(){
  'use strict';

  // Using the global items var
  console.log(items.length);

  /**
   * Functional Iterators
   */

   // FOREACH

   var fruits = ['banana', 'apple', 'pear'];
                      //0                     //1                //2

   function eatFruit(fruit){
     console.log('nohmm noohmmm noohmmm: ', fruit);
     //console.log('My Cars:', item[1]);
   }

   fruits.forEach(eatFruit);

  //  forEach(fruits, eatFruit);

  ['honda', 'dodge'].forEach(function(car, index, originalArray){
     console.log('Car number', index+1, 'out of', originalArray.length);
     console.log('Car: ', car);
   });

  //  forEach(['honda', 'dodge'], function(car, index, originalArray){
  //    console.log('Car number', index+1, 'out of', originalArray.length);
  //    console.log('Car: ', car);
  //  });

   var coffeeVendors = ['dunkin donuts', 'methodical', 'due south'];

   console.log(coffeeVendors.length);

    coffeeVendors.forEach(function(vendor, index){
      console.log('Good Coffee #', index+1);
    });

    function forEach(arrayToLoopOver, callback){
      for(var i=0; i<arrayToLoopOver.length; i++){
        callback(arrayToLoopOver[i], i, arrayToLoopOver);
      }
    }

    // MAP


    var productPrices = [10.50, 12, 20];

    function decreaseThePrice(productPrice, index, originalArray){
      return 'Originally ' + originalArray[index] + ' now ' + Math.floor(productPrice * 0.9);
    }

    var salePrices = productPrices.map(decreaseThePrice);

    console.log('Our sale prices', salePrices);

    function map(arrayToLoopOver, callback){
      var newArray = [];

      for(var i=0; i<arrayToLoopOver.length; i++){
        newArray.push(callback(arrayToLoopOver[i], i, arrayToLoopOver));
      }

      return newArray;
    }

    // REDUCE


    var totalPrice = productPrices.reduce(function(previousValue, productPrice){
      return previousValue + productPrice;
    }, 0);

    console.log(totalPrice);


    function reduce(arrayToLoopOver, callback){
      var accumulator;

      for(var i=0; i<arrayToLoopOver.length; i++){
        accumulator = callback(accumulator, arrayToLoopOver[i], i, arrayToLoopOver);
      }

      return accumulator;
    }



    // OBJECTS

    var coolCool = ['ice', 'snow'];

    console.log(coolCool[1]);

    var myCar = {
      doors: 4,
      wheels: 4,
      'coolGuySpinners': 4,
      'windows': 6,
      color: 'red',
      goFast: function(){
        console.log('vrrooooommmm!');
      },
      seats: 'fabric'
    };

    console.log(myCar['windows']);
    console.log(myCar['coolGuySpinners']);
    console.log(myCar.color, myCar.coolGuySpinners);

    myCar.goFast();

    console.log(myCar.hasOwnProperty('v6'));

    myCar.v6 = 'yeah, real fast!';

    console.log(myCar.hasOwnProperty('v6'));

}());
