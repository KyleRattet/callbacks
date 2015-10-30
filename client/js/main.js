// add scripts

// $(document).on('ready', function() {
//   console.log('sanity check!');
// });

//Initial Example

// var ourResult = true;

// var promise = new Promise (function (resolve, reject) {
//   if ( ourResult ) { resolve('It Worked!') }
//   else { reject(':(') }
// });

// //Option 1 w/o catch
// // promise.then(function (result) {
// //   console.log('Results:', result);
// // }, function (error) {
// //   console.log('Error:', error);
// // });

// //Option 2 w catch
// // promise.then(function (result) {
// //   console.log('Results', result);
// //   return result + "!!!!!";
// // }).then(function (result) {
// //   console.log('Results', result);
// //   return result;
// // })
// // .catch(function(error) {
// //   console.log('Error:', error);
// // });

// //Option 3 with named functions

// var successFn = function function_name (message) {
//   console.log('Success:', message);
//   // console.log(ourResult);
//   return message + "!!!!!!!";
// };

// var errorFn = function function_name (message) {
//   console.log('Error:', message);
// };

// promise.then(successFn, errorFn).
//         then(successFn, errorFn);



////Next Example

var ourResult = true;

var promise = new Promise (function (resolve, reject) {
  if ( ourResult ) { resolve('It worked!') }
  else { reject(':(') }
});

var successFn = function function_name (message) {
  console.log('Success:', message);
  // console.log(ourResult);
  return message;
};

var errorFn = function function_name (message) {
  console.log('Error:', message);
};


// promise.then(successFn, errorFn).
//         then(function (result) {
//           var product = result * 10;
//           console.log('Multiply by 10:', product);
//           return product;
//         });

promise.then(successFn)
      .then(successFn)
      .then(successFn)
      .then(function(message) { throw 'Error'; })
      .then(successFn)
      .then(successFn)
      .then(successFn)
      .catch(function(error) {
      console.log('New Error:', error);
      });
