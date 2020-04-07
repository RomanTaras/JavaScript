function sum( salary ) {
    var sum = 0;
  
    for( var el in salary ) {
      if( salary.hasOwnProperty( el ) ) {
        sum += parseInt( salary[el] );
      }
    }
    return sum;
  }
  var sample = { a: 10000 , b: 20000 , c:30000 };
  var summed = sum( sample );
  console.log( "sum: "+summed );