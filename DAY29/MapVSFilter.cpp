/*
  * Map() vs Filter()
  * Both methods in JS are used to -> Transform and Filter Arrays easily
  * But the map() applies the custom operation you define for every element
  * And the filter() creates a new array, selecting only those elements which 
  * pass a specific defined condition
  * map() - CODE :
  * 
  * const numbers = [5, 10, 15, 20, 25, 30]; 
  * const multipliedNumbers =  
  * numbers.map(num => num * 3); 
  * console.log(multipliedNumbers)
  * 
  * filter() - CODE :
  
  *  Using filter to get fruits which are yellow in color 
  * const fruits = [ 
  *  { name: 'apple', color: 'red' }, 
  *  { name: 'banana', color: 'yellow' }, 
  *  { name: 'kiwi', color: 'green' }, 
  * { name: 'orange', color: 'orange' }, 
  * { name: 'pineapple', color: 'yellow' } 
  *  ]; 
  * const yellowFruits =  
  *  fruits.filter(fruit => fruit.color === 'yellow');   
  * console.log(yellowFruits);
*/