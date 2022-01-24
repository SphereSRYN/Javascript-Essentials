var array = [ 
    "string",
    "hello",
    "world200",
    100,
    function(){ return "drive"; },
];

// Assignment
array[0] = "New string";

// Methods
//array.shift(); // Delete's first element 선입선출
array.pop(); // Delete's last element 후입선출

// Add new values to the beginning of the array
array.unshift( "new", "new values" ); //선입

// Add new values to the end of the array
array.push( "ending", "ending values" );//후입

array.forEach(element => {
    console.log(element);
});
console.log("============");
for (const key in array) {
    if (array.hasOwnProperty.call(array, key)) {
        const element = array[key];
       // console.log(element.valueOf());
      //  console.log(array);
    }
}
console.log(array[7].valueOf());
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }
// Splice can do anything remember
// splice( point, delete, add values... )
array.splice( 2, 0, "new elemets", [], {}, 200, 300, function(){} );
array.forEach(element => {
    console.log(element);
});