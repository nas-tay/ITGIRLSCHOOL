let arr = ["a", "b"];

arr.push(function() {
  alert( arr );
})

arr[2](); // ?